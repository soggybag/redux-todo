const NEW_TODO = 'NEW_TODO'

const newTodo = (payload) => {
  return {
    type: NEW_TODO,
    payload
  }
}

export { 
  NEW_TODO, 
  newTodo,
}
