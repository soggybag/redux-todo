const NEW_TODO = 'NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
// Make a new Action to complete a todo item: COMPLETE_TODO

// Make a new Action creator function completeTodo
const completeTodo = (index) => {
  return { type: COMPLETE_TODO, payload: { index } }
}

const newTodo = (payload) => {
  return {
    type: NEW_TODO,
    payload
  }
}

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
  deleteTodo,
  COMPLETE_TODO,
  completeTodo
  // Export the new action and creator
}
