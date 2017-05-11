import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import mainReducer from '../reducers';
import App from '../components/App';

declare var __PRELOADED_STATE__: typeof window;

const preloadedState = __PRELOADED_STATE__;
const store = createStore(mainReducer, preloadedState);
const appNode: any = document.getElementById('app');

const hmr: any = module;

if (appNode) {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    appNode
  );
}

if (hmr.hot) {
  hmr.hot.accept();
}
