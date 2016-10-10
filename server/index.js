'use strict';

import Koa from 'koa';
import logger from 'koa-logger';
import Router from 'koa-router';
import serve from 'koa-static';
// Middleware for accesing json from ctx.request.body
import parser from 'koa-bodyparser';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';

import { connectDatabase } from './db';
import { development, test, production } from './db/config';

import projectRoutes from './routes/project';
import taskRoutes from './routes/task';
import labelRoutes from './routes/label';
import noteRoutes from './routes/note';

// mongoose init code
const port = process.env.PORT || 4000;
const databaseConfig = (process.env.NODE_ENV == 'production' ) ? production : development;

(async() => {
  try {
    const info = await connectDatabase(databaseConfig);
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to database');
  }

  await app.listen(port);
  console.log(`Server started on port ${port}`);
})();

// Applies all routes to the router.
const projectRouter = projectRoutes(Router());
const taskRouter = taskRoutes(Router());
const labelRouter = labelRoutes(Router());
const noteRouter = noteRoutes(Router());

var app = new Koa();

var serve_opts =  { maxage: 24 * 60 * 60 * 1000 };

app
  .use(conditional())
  .use(etag())
  .use(logger())
  .use(parser())
  // .use(async function(ctx, next) {
  //   console.log(ctx);
  //   return await next();
  // })
  .use(serve('./public', serve_opts))
  .use(projectRouter.routes()) 
  .use(projectRouter.allowedMethods())
  .use(taskRouter.routes()) 
  .use(taskRouter.allowedMethods())
  .use(labelRouter.routes())
  .use(labelRouter.allowedMethods())
  .use(noteRouter.routes())
  .use(noteRouter.allowedMethods())

