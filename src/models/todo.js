let mongoose = require('mongoose');
let TodoSchema = require('../schemas/todo');
let TodoBox = mongoose.model('TodoBox', TodoSchema);

module.exports = TodoBox;
