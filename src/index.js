import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import postsReducer from './app/reducers/posts_reducer';
import selectedPostReducer from './app/reducers/selected_post_reducer';

const reducers = combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
