import Task from '../models/task.js';
import Label from '../models/label.js';

export default router => {
  const api = 'api'
  router.prefix('/api/tasks/');

  router.get('/', async (ctx, next) => {
    if(true){
      let labels = await Label.find({ 'name': 'test' });
      labels.forEach( (label) => {
        console.log(label);
        console.log(label.name);
      })
      ctx.body = labels
    }
    else{
      ctx.body = await Task.find()
    }
  });

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