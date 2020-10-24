import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import './App.css';

import { loadState, saveState } from '../../helpers'

import TodoNew from '../todo-new/todo-new'
import TodoList from '../todo-list'

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Todos ++</h1>
          <TodoNew />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
