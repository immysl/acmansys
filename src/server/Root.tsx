import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Context } from 'koa';

import mainReducer from '../reducers';
import App from '../components/App';
import { renderIndexPage } from './render';

async function Root(ctx: Context) {
  const store = createStore(mainReducer);
  const preloadedState = store.getState();
  const routerContext = { url: '' };

  const configElements = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.originalUrl} context={routerContext}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  if (routerContext.url) {
    ctx.response.redirect(routerContext.url);
    ctx.status = 301;
  } else {
    ctx.body = renderIndexPage(configElements, preloadedState);
    ctx.status = 200;
  }
}

export default Root;
