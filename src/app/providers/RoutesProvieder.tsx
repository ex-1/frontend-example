import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from '../config/route.gen'

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	defaultPreload: 'intent'
})

export function RoutesProvieder({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<RouterProvider router={router} />
			{children}
		</>
	)
}
