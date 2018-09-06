const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const arrayUniquePlugin = require('mongoose-unique-array');

const fieldDefinitionSchema = new mongoose.Schema({
  key: {
    type: String,
    trim: true,
    required: 'All fields need a unique key',
    unique: true
  },
  type: {
    type: String,
    default: 'Markdown',
    enum: ['Markdown'],
    required: 'All fields need an associated type'
  }
});

fieldDefinitionSchema.plugin(arrayUniquePlugin);

const noteTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'You must supply a name'
  },
  slug: String,
  fieldDefinitions: [fieldDefinitionSchema],
  templates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template'
    }
  ]
});

noteTypeSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  // find other stores that have a slug of wes, wes-1, wes-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const noteTypesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (noteTypesWithSlug.length) {
    this.slug = `${this.slug}-${noteTypesWithSlug.length + 1}`;
  }
  next();
});

module.exports = mongoose.model('NoteType', noteTypeSchema);
