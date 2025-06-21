import { createApi } from './lib/createApi'
import { paths } from './schema/generated'

export type ApiV1Schema = paths

const apiV1 = createApi<ApiV1Schema>({ baseUrl: 'https://localhost:8000' })

export const { useQuery } = apiV1
