import React from 'react'
import { useSelector } from 'react-redux'

function one() {
	return 1
}

const two = () => {
	return 2
}

const three = () => 3

function TodoStats(props) {
	const todos = useSelector((state) => state.todos)
	const total = todos.length
	const complete = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0)
	const active = todos.reduce((acc, todo) => todo.completed ? acc : acc + 1, 0 )

	return (
		<div>
			<small>Count: {total}</small>
			<small> Complete: {complete}</small>
			<small> Active: {active}</small>
			<div style={{ width: '100%', height: '3px', backgroundColor: '#eee', display:'flex'}}>
				<div style={{ width:`${100 * active / total}%`, backgroundColor:'#0f0', height: '100%'}}></div>
				<div style={{ width:`${100 * complete / total}%`, backgroundColor:'#f00', height: '100%'}}></div>
			</div>
		</div>
	)
}

export default TodoStats