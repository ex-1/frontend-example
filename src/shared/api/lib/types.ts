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

export type HookParams<
	Api extends ApiShape,
	Url extends keyof Api,
	Method extends keyof Api[Url]
> = { url: Url; method: Method } & {
	[K in keyof Api[Url][Method]['request']]: Api[Url][Method]['request'][K]
}

// useQuery Types
export type UseQueryParams = Partial<{
	refetchInterval: number // ms
	gcTime: number // ms
	staleTime: number // ms
	qKey: string
}>

export type UseQueryReturn<Response> = [
	data: Response,
	isFetching: boolean,
	refetchQuery: () => Promise<void>
] & {
	data: Response
	isFetching: boolean
	refetchQuery: () => Promise<void>
}

// useAction Types
type Invalidate<Request, Response> =
	| string[]
	| ((req: Request, res: Response) => string[])

export type UseActionParams<Response, Request> = Partial<{
	invalidate: Invalidate<Response, Request>
	onSuccess: (data: Response) => void
	onError: (error: unknown) => void
}>
