const NEW_TODO = 'NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'

const newTodo = (payload) => {
  return {
    type: NEW_TODO,
    payload
  }
}

// deleteTodo(4)

const deleteTodo = (index) => {
  return {
    type: DELETE_TODO, // !!!! REQUIERED !!!!!
    payload: { index } // { index: 4 }
  }
}

export { 
  NEW_TODO, 
  newTodo,
  DELETE_TODO,
  deleteTodo
}
