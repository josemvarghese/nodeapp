var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name:  String,
  description: String,
  createdBy:   String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('event',eventSchema);