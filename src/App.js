import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import './App.css';

import { loadState, saveState } from './helpers'

import NewTodo from './components/todo-new'
import TodoList from './components/todo-list'

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todos ++</h1>
        <NewTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
