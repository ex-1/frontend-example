// Api structure type
export type ApiShape = {
	[url: string]: {
		[method: string]: {
			request: {
				url: string
				method: string
				headers?: Record<string, string>
				body?: unknown
				query?: Record<string, unknown>
				path?: Record<string, string | number>
			}
			response: {
				status: number
				headers?: Record<string, string>
				body?: unknown
			}
		}
	}
}

export type CreateApi = { baseUrl: string }

// useQuery Types
export type UseQueryParams<
	Api extends ApiShape,
	Url extends keyof Api,
	Method extends keyof Api[Url]
> = { url: Url; method: Method } & {
	[K in keyof Api[Url][Method]['request']]: Api[Url][Method]['request'][K]
}

export type UseQueryExtraParams = { refetchInterval?: number }

export type UseQueryReturn<Response> = {
	response: Response
	isFetching: boolean
	refetch: () => Promise<void>
}

// fetcher types
export type FetcherParams = ApiShape[string][string]['request'] &
	Pick<CreateApi, 'baseUrl'>
