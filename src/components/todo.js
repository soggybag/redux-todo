import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions'
import './todo.css'

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index } = props

  const completedClass = completed ? 'completed' : ''

  return (
    <div className="todo">
      <h1 className="todo-name">{name}</h1>
      <button 
        onClick={() => {
          dispatch(deleteTodo(index))
        }}
        className={`todo-completed ${completedClass}`}
      >
        X
      </button>
    </div>
  )
}

export default Todo
