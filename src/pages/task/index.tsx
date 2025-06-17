import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/task/')({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/task/"!</div>
}
