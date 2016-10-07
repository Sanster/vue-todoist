'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Label = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Label.add({
  name: String,
});

export default mongoose.model('Label', Label);
