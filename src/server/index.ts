import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';

import Root from './Root';
import { port } from './config';

const koa = new Koa();
const router = new Router();

router.get('*', Root);

koa.use(logger());
koa.use(serve(path.join(__dirname, '../static')));
koa.use(router.routes());
koa.listen(port);
