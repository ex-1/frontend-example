import { useQuery } from '@/shared/api/v1'

export function TaskItem({ id }: { id: number }) {
	const { response } = useQuery({
		url: '/test/{test_id}',
		method: 'GET',
		path: { test_id: id }
	})

	return (
		<div>
			<span>{JSON.stringify(response.body, null, 2)}</span>
		</div>
	)
}
