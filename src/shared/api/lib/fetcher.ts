import axios from 'axios'

import { FetcherParams } from './types'

export async function fetcher<Response>({
	baseUrl,
	url,
	method,
	body,
	headers,
	path,
	query
}: FetcherParams) {
	let formatedUrl = url

	if (path) {
		Object.entries(path).forEach(([path, value]) => {
			formatedUrl = formatedUrl.replace(`{${path}}`, String(value))
		})
	}

	console.log(formatedUrl)

	const res = await axios<Response>({
		baseURL: baseUrl,
		url: formatedUrl,
		method,
		headers,
		params: query,
		data: body
	})

	return res.data
}
