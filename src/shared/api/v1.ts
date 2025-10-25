import { createApi } from './lib/createApi'
import { paths } from './schema/generated'

export type ApiV1Schema = paths

const apiV1 = createApi<ApiV1Schema>({ baseUrl: 'https://localhost:8000' })

export const { useQuery } = apiV1

export default () => {
	const { data, isFetching } = useQuery({
		url: '/api/dictionary/devices/page-query',
		method: 'GET',
		query: { page: 0, limit: 1 }
	})
}
