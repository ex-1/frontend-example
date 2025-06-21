import { QueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useCallback } from 'react'

import { fetcher } from './fetcher'
import type {
	ApiShape,
	CreateApi,
	UseQueryExtraParams,
	UseQueryParams,
	UseQueryReturn
} from './types'

export function createApi<Api extends ApiShape>({ baseUrl }: CreateApi) {
	const queryKey = '123'
	// const queryKey = randomUUID()
	const queryClient = new QueryClient()

	const useQuery = <Url extends keyof Api, Method extends keyof Api[Url]>(
		{ url, method, body, headers, path, query }: UseQueryParams<Api, Url, Method>,
		{ refetchInterval }: UseQueryExtraParams = {}
	): UseQueryReturn<Api[Url][Method]['response']> => {
		const {
			data,
			isFetching,
			refetch: reactQueryRefetch
		} = useSuspenseQuery({
			queryKey: [queryKey, url, method, body, headers, path, query],
			queryFn: () =>
				fetcher<Api[Url][Method]['response']>({
					url,
					baseUrl,
					method,
					body,
					headers,
					path,
					query
				}),
			refetchInterval,
			retry: false
		})

		const refetch = useCallback(async () => {
			await reactQueryRefetch()
		}, [reactQueryRefetch])

		return { response: data!, isFetching, refetch }
	}

	return { useQuery }
}

// const { useQuery } = createApi<ApiSchema>({ baseUrl: 'http://localhost:8000' })
// const { response, isFetching, refetch } = useQuery({
// 	url: '/pet',
// 	method: 'POST',
// 	body: { name: '123', photoUrls: ['test'] }
// })
