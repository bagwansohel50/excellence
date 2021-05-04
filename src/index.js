import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from "./App.js"
import Api from "./Api.js"
import Check from "./Check.js"
import Even from "./Even.js"
import TodoList from "./TodoList"
import Consecutive from "./Consecutive.js"




ReactDOM.render(
  <>
  <Even/>
  <Check/>
  <Consecutive/>
  <Api/>
  <App/>
  <TodoList/>
   
  </>,
  document.getElementById('root')
);

