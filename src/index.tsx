import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store, { StateType } from './redux/redux-store';

//функция renderTree запускается каждый раз, как мы изменяем стейт
const renderTree = (state: StateType) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>,
    document.getElementById('root')
  );
}


//отрисовывем приложение прокидывая стейт
renderTree(store.getState());


//уведомляем редакс об изменении
store.subscribe(() => {
  let state = store.getState()
  renderTree(state)
});

