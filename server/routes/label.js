import Label from '../models/label.js'

export default router => {
  const api = 'api'
  router.prefix('/api/labels/');

  router.get('/', async (ctx, next) =>
    ctx.body = await Label.find());

  router.post('/', async (ctx, next) =>
    ctx.body = await new Label(ctx.request.body).save());

  router.get('/:id', async (ctx, next) =>
    ctx.body = await Label.findById(ctx.params.id));

  router.put('/:id', async (ctx, next) =>
    ctx.body = await Label.findByIdAndUpdate(ctx.params.id, ctx.request.body));

  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Label.findByIdAndRemove(ctx.params.id));

  return router;
}