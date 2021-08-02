import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store, StateType }  from './redux/redux-store';
import { Provider } from 'react-redux';

//функция renderTree запускается каждый раз, как мы изменяем стейт
const renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


//отрисовывем приложение прокидывая стейт
renderTree();


//уведомляем редакс об изменении
store.subscribe(() => {
  renderTree()
});

