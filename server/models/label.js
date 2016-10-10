'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Label = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Label.add({
  name: { type: String, unique: true, index: true },
  tasks: [ObjectId]
});

export default mongoose.model('Label', Label);
