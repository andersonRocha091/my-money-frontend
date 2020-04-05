import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import Reducers from './main/Reducers';
import * as serviceWorker from './serviceWorker';

const store = applyMiddleware(promise)(createStore)(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
