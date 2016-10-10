'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Project = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Project.add({
  name: { type: String, unique: true },
  color: { type: Number, default: 0 },
  parent_id: ObjectId,
  tasks: [ObjectId],
});

export default mongoose.model('Project', Project);
