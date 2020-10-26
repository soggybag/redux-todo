import { NEW_TODO, DELETE_TODO, COMPLETE_TODO, REMOVE_ALL } from '../actions'
// import the new action

// { type: NEW_TODO, payload: { name, date, completed } }
// { type: COMPLETE_TODO, payload: { index: 0 } }

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case REMOVE_ALL: 
      return []

    case COMPLETE_TODO: 
      return state.map((todo, i) => {
        if (action.payload.index === i) {
          todo.completed = !todo.completed
        }
        return todo
      })

    case NEW_TODO: 
      return [...state, action.payload ]
    
    case DELETE_TODO: 
      const newState = state.filter((item, i) => {
        return i !==  action.payload.index 
      })
      return newState

    // Add a new case to handle the action

    default: 
      return state
  }
}

export default todoReducer
