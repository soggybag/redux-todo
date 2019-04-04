import React, { Component } from 'react'
import './todo.css'

class Todo extends Component {

  render() {
    const { name, completed, index } = this.props

    const completedClass = completed ? 'completed' : ''

    return (
      <div className="todo">
        <h1 className="todo-name">{name}</h1>
        <button 
          className={`todo-completed ${completedClass}`}
        >
          X
        </button>
      </div>
    )
  }
}

export default Todo