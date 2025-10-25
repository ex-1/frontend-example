export function processTemplateUrl<
	PathParamsShape extends Record<string, string | number> | undefined
>(url: string, params: PathParamsShape) {
	if (!params) return url
	return url.replace(/{([^}]+)}/g, (_, key) => String(params[key]))
}
