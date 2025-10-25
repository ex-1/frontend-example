import { useSuspenseQuery } from '@tanstack/react-query'
import { useCallback } from 'react'

import { fetcherFactory } from './fetcher'
import type {
	ApiShape,
	CreateApi,
	HookParams,
	UseQueryParams,
	UseQueryReturn
} from './types'
import { processTemplateUrl } from './utils'

export function createApi<Api extends ApiShape>({ baseUrl }: CreateApi) {
	const fetcher = fetcherFactory(baseUrl)

	const useQuery = <Url extends keyof Api, Method extends keyof Api[Url]>(
		{ url, method, body, headers, path, query }: HookParams<Api, Url, Method>,
		{ refetchInterval, gcTime, staleTime, qKey }: UseQueryParams = {}
	): UseQueryReturn<Api[Url][Method]['response']> => {
		const requestUrl = processTemplateUrl(url, path)

		const queryKey = [url, method, body, headers, path, query]
		if (qKey) queryKey.push(qKey)

		const queryFn = async () => {
			const res = await fetcher<Api[Url][Method]['response']>({
				url: requestUrl,
				data: body,
				params: query,
				method,
				headers
			})

			return res.data
		}

		const { data, isFetching, refetch } = useSuspenseQuery({
			queryKey,
			queryFn,
			refetchInterval,
			retry: false,
			gcTime,
			staleTime
		})

		const refetchQuery = useCallback(async () => {
			await refetch()
		}, [refetch])

		const ret: [typeof data, boolean, typeof refetchQuery] = [
			data,
			isFetching,
			refetchQuery
		]

		return Object.assign(ret, { data, isFetching, refetchQuery })
	}

	return { useQuery }
}
