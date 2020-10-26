import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, completeTodo } from '../actions'
import './todo.css'
// import your complete todo action

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index, date } = props

  // console.log(date.toLocaleString('en-us'))

  const completedClass = completed ? 'completed' : ''
  // Use a class to style the complete button

  return (
    <div className="todo">
      <div>
        <h1 className="todo-name">{name}</h1>
        <small>{date.toLocaleString('en-us')}</small>
      </div>
      
      <button 
        className={`${completedClass}`}
        onClick={() => {
          dispatch(deleteTodo(index))
        }}
      >✖︎</button>
      
      <button
        onClick={() => dispatch(completeTodo(index))}
      >{completed ? 'Complete!' : 'Not'}</button>
    </div>
  )
}

export default Todo
