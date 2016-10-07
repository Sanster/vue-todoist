import Project from '../models/project.js'

export default router => {
  const api = 'api'
  router.prefix('/api/projects/');

  router.get('/', async (ctx, next) =>
    ctx.body = await Project.find());

  router.post('/', async (ctx, next) =>
    ctx.body = await new Project(ctx.request.body).save());

  router.get('/:id', async (ctx, next) =>
    ctx.body = await Project.findById(ctx.params.id));

  router.put('/:id', async (ctx, next) =>
    ctx.body = await Project.findByIdAndUpdate(ctx.params.id, ctx.request.body));

  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Project.findByIdAndRemove(ctx.params.id));

  return router;
}