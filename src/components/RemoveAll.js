import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAll } from '../actions'

function RemoveAll() {
	const dispatch = useDispatch()
	return (
		<button
			onClick={() => dispatch(removeAll())}
		>Remove All</button>
	)
}

export default RemoveAll