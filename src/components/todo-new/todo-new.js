import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newTodo } from '../../actions'

import './todo-new.css'

class TodoNew extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      todoName: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { todoName } = this.state 
    if (todoName === '') { return }
    this.props.newTodo({ 
      name: this.state.todoName, 
      completed: false
    })
    this.setState({ todoName: '' })
  }

  render() {
    return (
      <form 
        className="todo-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input 
          className="todo-input"
          type="text"
          placeholder="What do you need to do"
          value={this.state.todoName}
          onChange={(e) => this.setState({ todoName: e.target.value })}
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
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = () => {
  return { newTodo }
}

export default connect(mapStateToProps, mapDispatchToProps())(TodoNew)
