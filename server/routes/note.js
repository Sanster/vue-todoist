import Note from '../models/note.js';

export default router => {
  const api = 'api'
  router.prefix('/api/notes/');

  router.get('/', async (ctx, next) =>
    ctx.body = await Note.find());

  router.post('/', async (ctx, next) =>
    ctx.body = await new Note(ctx.request.body).save());

  router.get('/:id', async (ctx, next) =>
    ctx.body = await Note.findById(ctx.params.id));

  router.put('/:id', async (ctx, next) =>
    ctx.body = await Note.findByIdAndUpdate(ctx.params.id, ctx.request.body));

  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Note.findByIdAndRemove(ctx.params.id));

  return router;
}