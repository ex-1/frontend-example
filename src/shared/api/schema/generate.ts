/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import yaml from 'js-yaml'
import { dirname, resolve } from 'path'
import { CodeBlockWriter, Project, Writers } from 'ts-morph'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SCHEMA_PATH = resolve(__dirname, 'test.json') // или .json
const OUT_FILE = 'generated.ts'
const TSCONFIG_PATH = '../../../../configs/tsconfig.node.json'

function loadSchema(filePath: string): any {
	const content = fs.readFileSync(filePath, 'utf-8')
	return filePath.endsWith('.yaml') || filePath.endsWith('.yml')
		? yaml.load(content)
		: JSON.parse(content)
}

function resolveRef(ref: string): string {
	const parts = ref.split('/')
	return parts[parts.length - 1]
}

function transformType(schema: any): string {
	if (!schema) return 'unknown'
	if (schema.$ref) return resolveRef(schema.$ref)
	if (schema.enum) return schema.enum.map((v: string) => `"${v}"`).join(' | ')
	if (schema.type === 'integer') return 'number'
	if (schema.type === 'array') return `Array<${transformType(schema.items)}>`
	if (schema.type === 'object') {
		if (!schema.properties) return 'Record<string, unknown>'
		return Writers.objectType({
			properties: Object.entries(schema.properties).map(([k, v]: any) => ({
				name: k,
				type: transformType(v),
				hasQuestionToken: !(schema.required || []).includes(k)
			}))
		}) as any
	}
	if (schema.type === 'string' && schema.format === 'binary') return 'Blob'
	return schema.type || 'unknown'
}

function generateSchemas(sourceFile: any, schemas: Record<string, any>) {
	for (const [name, schema] of Object.entries(schemas)) {
		sourceFile.addTypeAlias({
			name,
			isExported: true,
			type: transformType(schema)
		})
	}
}

function extractParameters(params: any[] = []) {
	const result: Record<'path' | 'query' | 'header', Record<string, string>> = {
		path: {},
		query: {},
		header: {}
	}

	for (const param of params) {
		const loc = param.in as 'path' | 'query' | 'header'
		const name = param.required ? param.name : param.name + '?'
		const type = transformType(param.schema)
		if (loc === 'path' || loc === 'query' || loc === 'header') {
			result[loc][name] = type
		}
	}

	return result
}

function generatePaths(sourceFile: any, paths: any) {
	const writer = new CodeBlockWriter({ indentNumberOfSpaces: 2 })

	writer
		.writeLine('export type paths = {')
		.indent(() => {
			for (const [url, methods] of Object.entries(paths)) {
				writer
					.writeLine(`"${url}": {`)
					.indent(() => {
						for (const [method, operation] of Object.entries(methods as any)) {
							const op = operation as any

							const params = extractParameters(op.parameters)
							const hasQuery = Object.keys(params.query).length > 0
							const hasPath = Object.keys(params.path).length > 0
							const hasHeader = Object.keys(params.header).length > 0

							let requestBodyType = undefined
							if (op.requestBody?.content?.['application/json']?.schema) {
								const schema = op.requestBody.content['application/json'].schema
								requestBodyType = transformType(schema)
							}

							let responseBodyType = undefined
							const success =
								op.responses?.['200'] ||
								op.responses?.['201'] ||
								op.responses?.['default']
							if (success?.content?.['application/json']?.schema) {
								const schema = success.content['application/json'].schema
								responseBodyType = transformType(schema)
							}

							writer
								.writeLine(`${method.toUpperCase()}: {`)
								.indent(() => {
									writer
										.writeLine('request: {')
										.indent(() => {
											writer.writeLine(`url: "${url}",`)
											writer.writeLine(`method: "${method.toUpperCase()}",`)
											if (hasQuery) {
												writer.writeLine(`query: {`)
												writer.indent(() => {
													for (const [key, type] of Object.entries(params.query)) {
														writer.writeLine(`${key}: ${type},`)
													}
												})
												writer.writeLine(`},`)
											}
											if (hasPath) {
												writer.writeLine(`path: {`)
												writer.indent(() => {
													for (const [key, type] of Object.entries(params.path)) {
														writer.writeLine(`${key}: ${type},`)
													}
												})
												writer.writeLine(`},`)
											}
											if (hasHeader) {
												writer.writeLine(`headers: {`)
												writer.indent(() => {
													for (const [key, type] of Object.entries(params.header)) {
														writer.writeLine(`${key}: ${type},`)
													}
												})
												writer.writeLine(`},`)
											}
											if (requestBodyType) {
												writer.writeLine(`body: ${requestBodyType},`)
											}
										})
										.writeLine('},') // end request

									writer
										.writeLine('response: {')
										.indent(() => {
											writer.writeLine('status: number,')
											if (responseBodyType) {
												writer.writeLine(`body: ${responseBodyType},`)
											}
										})
										.writeLine('}') // end response
								})
								.writeLine('},') // end method
						}
					})
					.writeLine('},') // end path
			}
		})
		.writeLine('}') // end paths

	sourceFile.insertText(0, writer.toString())
}

async function main() {
	const openapi = loadSchema(SCHEMA_PATH)
	const project = new Project({
		tsConfigFilePath: resolve(__dirname, TSCONFIG_PATH),
		skipAddingFilesFromTsConfig: true
	})
	const filePath = resolve(__dirname, OUT_FILE)
	const sourceFile = project.createSourceFile(filePath, '', { overwrite: true })

	if (openapi.components?.schemas) {
		generateSchemas(sourceFile, openapi.components.schemas)
	}
	generatePaths(sourceFile, openapi.paths)

	await sourceFile.save()
	console.log('Generated in', OUT_FILE)
}

main()
