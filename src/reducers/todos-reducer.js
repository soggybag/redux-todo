import { NEW_TODO } from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case NEW_TODO: 
      return [...state, action.payload]

    default: 
      return state
  }
}
