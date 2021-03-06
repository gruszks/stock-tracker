import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import debounce from 'lodash/debounce';
import pick from 'lodash/pick';

import App from './app';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};
const store = configureStore(persistedState);

store.subscribe(
  debounce(() => {
    const state = store.getState();
    const stateToStore = pick(state, 'companies.data');

    localStorage.setItem('reduxState', JSON.stringify(stateToStore));
  }, 100)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
