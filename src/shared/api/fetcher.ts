// import axios from 'axios'
import { FetcherParams } from './types'

export async function fetcher({
	baseUrl,
	url,
	method,
	body,
	headers,
	path,
	query
}: FetcherParams) {
	console.log(baseUrl, url, body, method, headers, path, query)
}
