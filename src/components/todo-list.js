import React from 'react'
import { useSelector } from 'react-redux'

import Todo from './todo'

function TodoList() {
  const todos = useSelector((state) => state.todos)
  
  function renderTodos() {
    return todos.map((todo, i) => <Todo {...todo} index={i} key={i} />)
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}



export default TodoList