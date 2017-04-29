import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import Html from './Html';
import { Context } from 'koa';

type Func = () => void;

async function app(ctx: Context, next: Func) {
  const root = ReactDOMServer.renderToString(<App/>);

  ctx.body = ReactDOMServer.renderToStaticMarkup(<Html root={root}/>);
  ctx.status = 200;
}

export default app;
