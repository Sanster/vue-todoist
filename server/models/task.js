'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Task.add({
  content: String,
  finished: { type: Boolean, default: false },
  project_id: ObjectId,
  due_date: Date,
  priority: Number,
  labels: [ObjectId]
});

export default mongoose.model('Task', Task);