let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Todo = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, {collection: 'todo'});

module.exports = Todo;
