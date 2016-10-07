'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Note = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Note.add({
  content: String,
  noteable_type: String,
  noteable_id: ObjectId,
});

export default mongoose.model('Note', Note);
