const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: String,
  comment: String
});

mongoose.model('notes', NoteSchema);
