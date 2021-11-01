import React from 'react';
import {render, screen} from "@testing-library/react"
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter } from 'react-router-dom';


  test('should ', () => {
    const fragment =
      <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </HashRouter>
  
    const {asFragment} = render(fragment)
    // const linkElement = getByText(/News/i);
    expect(asFragment(fragment)).toMatchSnapshot()
    // screen.debug();
  })

