import Task from '../models/task.js';

export default router => {
  const api = 'api'
  router.prefix('/api/tasks/');

  router.get('/', async (ctx, next) =>
    ctx.body = await Task.find());

  router.post('/', async (ctx, next) =>
    ctx.body = await new Task(ctx.request.body).save());

  router.get('/:id', async (ctx, next) =>
    ctx.body = await Task.findById(ctx.params.id));

  router.put('/:id', async (ctx, next) =>
    ctx.body = await Task.findByIdAndUpdate(ctx.params.id, ctx.request.body));

  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Task.findByIdAndRemove(ctx.params.id));

  return router;
}