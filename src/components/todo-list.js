import React from 'react'
import { connect } from 'react-redux'

import Todo from './todo'

function TodoList(props) {
  
  function renderTodos() {
    const { todos } = props
    return todos.map((todo, i) => <Todo {...todo} index={i} key={i} />)
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}

const mapStateToProps = (state) => {

  return { ...state }
}

export default connect(mapStateToProps)(TodoList)