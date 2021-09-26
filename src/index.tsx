import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store }  from './redux/redux-store';
import { Provider } from 'react-redux';

//УДАЛИЛИ ФУНКЦИЮ render, т.к. в к контейнерной компоненте мы используем функциюю connect, в ней есть встроенный render, отрисовка происходит локально!!!!!!!!!!!!!

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );


// //отрисовывем приложение прокидывая стейт
// renderTree();


// //уведомляем редакс об изменении
// store.subscribe(() => {
//   renderTree()
// });

