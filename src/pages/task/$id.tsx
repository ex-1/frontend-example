import { createFileRoute, useParams } from '@tanstack/react-router'
import { Suspense } from 'react'

import { TaskItem } from '@/entities/task/ui/TaskItem'

export const Route = createFileRoute('/task/$id')({
	component: RouteComponent
})

function RouteComponent() {
	const { id } = useParams({ from: '/task/$id' })

	return (
		<div>
			<span>Hello "/task/{id}"!</span>
			<Suspense fallback={<div>'loading...'</div>}>
				<TaskItem id={id} />
			</Suspense>
		</div>
	)
}
