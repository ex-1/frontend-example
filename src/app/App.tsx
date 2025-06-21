import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RoutesProvieder } from './providers/RoutesProvieder'

const baseQueryClient = new QueryClient({})

export default function App() {
	return (
		<QueryClientProvider client={baseQueryClient}>
			<RoutesProvieder />
		</QueryClientProvider>
	)
}
