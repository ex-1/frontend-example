import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/task/$id')({
	component: RouteComponent
})

function RouteComponent() {
	const { id } = useParams({ from: '/task/$id' })

	return <div>Hello "/task/{id}"!</div>
}
