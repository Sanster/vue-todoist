'use strict';

import send from 'koa-send';
import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';

var app = new Koa();
var router = Router();

var serve_opts =  { maxage: 24 * 60 * 60 * 1000 };

app.use(serve('./public', serve_opts));

router.get('/', async function (ctx, next) {
  await send(ctx, "./public/index.html");
});

app.use(router.routes());

app.listen(3002);

console.log('listening on port 3002');