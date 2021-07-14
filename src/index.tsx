import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { state, subscriber } from './redux/state';

const renderTree = () => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>,
    document.getElementById('root')
  );
}

renderTree();

subscriber(renderTree);