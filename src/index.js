import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./components/book.css";
import "./components/booklist.css";
import { BrowserRouter as Router } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from 'react-redux';
import { reducer } from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);
