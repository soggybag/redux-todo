import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { newTodo } from '../actions'

import './todo-new.css'

function TodoNew(props) {

  const [ name, setName ] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if (name === '') { return }
    // newTodo = (payload) => { ..... }
    dispatch(newTodo( { 
      name: name, 
      completed: false, 
      date: new Date()
    } ))
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
      >
        +
      </button>

    </form>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = () => {
  return { newTodo }
}

export default connect(mapStateToProps, mapDispatchToProps())(TodoNew)
