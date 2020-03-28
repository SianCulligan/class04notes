'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String },
  type: {
    type: String,
    enum: ['Low Imporance', 'Regular', 'High Importance'],
  },
});

//pre hook
notesSchema.pre('save', function () {
  console.log('attempting to save record:');
  console.log(this.name);
  console.log('-----------');
  console.log(this.category);
  console.log('-----------');
  console.log(this.type);
  console.log('-----------');

  //   this.type='REMINDER = this will over write whatever entered in index.js';

  //if typeof this._id === 'string';
  // console.log('looks at the ID type and prints the type');

  //OR!

  //If you don't know the type
  //console.log('id is a:', typeof this._id);

  //SPOILER: ID is an object
});

//post hook
notesSchema.post('save', function() {
  console.log('---Note saved!---');
});
  
const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;