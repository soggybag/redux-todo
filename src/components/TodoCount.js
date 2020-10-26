import React from 'react'
import { useSelector } from 'react-redux'

function TodoCount() {
	const todos = useSelector((state) => state.todos)
	return (
		<div>
			<h1>{todos.length}</h1>
		</div>
	)
}

export default TodoCount