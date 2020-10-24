import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/index'
import './todo.css'

class Todo extends Component {

  render() {
    const { name, completed, index } = this.props

    const completedClass = completed ? 'completed' : ''

    return (
      <div className="todo">
        <h1 className="todo-name">{name}</h1>
        <button 
          onClick={() => {
            this.props.deleteTodo(index)
          }}
          className={`todo-completed ${completedClass}`}
        >
          X
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    deleteTodo
  }
}

export default connect(null, mapDispatchToProps())(Todo)