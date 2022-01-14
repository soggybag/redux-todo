import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions'
import './todo.css'
// import your complete todo action

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index } = props

  const completedClass = completed ? 'completed' : ''
  // Use a class to style the complete button

  return (
    <div className="todo">
      <h1 className="todo-name">{name}</h1>
      <button 
        className={`${completedClass}`}
        onClick={() => {
          dispatch(deleteTodo(index))
        }}
      >✖︎</button>
      {/* Add a new button to mark a todo as complete */}
    </div>
  )
}

export default Todo
