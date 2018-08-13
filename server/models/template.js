const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'You must supply a name'
  },
  front: {
    type: String,
    trim: true
  },
  back: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Template', templateSchema);