import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTodo } from '../actions'

import TodoItem from './TodoItem'

import './todo-new.css'

function TodoNew(props) {
  const [ name, setName ] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if (name === '') { return }
    // newTodo = (payload) => { ..... }
    dispatch(newTodo(new TodoItem(name)))
    setName('')
  }

  return (
    <form 
      className="todo-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input 
        className="todo-input"
        type="text"
        placeholder="What do you need to do"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button 
        className="todo-button"
        type="submit"
      >✚</button>

    </form>
  )
}

export default TodoNew
