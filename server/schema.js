'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Project = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Project.add({
  name: String,
  color: Number,
  parent_id: ObjectId,
  tasks: [ObjectId],
});

var Task = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Task.add({
  content: String,
  finished: { type: Boolean, default: false },
  project_id: ObjectId,
  due_date: Date,
  priority: Number,
  labels: [ObjectId]
});

var Note = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Note.add({
  content: String,
  noteable_type: String,
  noteable_id: ObjectId,
});

var Label = new Schema({},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

Label.add({
  name: String,
});


var Project = mongoose.model('Project', Project);
var Task = mongoose.model('Task', Task);
var Note = mongoose.model('Note', Note);
var Label = mongoose.model('Label', Label);

mongoose.connect('mongodb://localhost/test');

var test_project = new Project({
  name: "test project",
  color: 0,
});

test_project.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Save project success');
  }
});

var test_task = new Task({
  content: "test task",
});

test_task.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Save task success');
  }
});

var test_note = new Note({
  content: "test note",
  noteable_type: "Project",
});

test_note.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Save note success');
  }
});

var test_label = new Label({
  content: "test label",
});

test_label.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Save label success');
  }
});
