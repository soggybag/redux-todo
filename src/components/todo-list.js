import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './todo/todo'

class TodoList extends Component {
  
  renderTodos() {
    const { todos } = this.props
    return todos.map((todo, i) => <Todo {...todo} index={i} />)
  }

  render() {


    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { ...state }
}

export default connect(mapStateToProps)(TodoList)