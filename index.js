'use strict';

const mongoose = require('mongoose');
const url = 'mongodb+srv://sian:seattle1234@noteslab-zzafb.mongodb.net/notesLab';
const NotesModel = require('./lib/models/notes-model.js');

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const dbOps = async () => {
  let num = Math.ceil(Math.random()*1000);
  let newNoteData = {
    name: `Note ${num}`,
    category: 10,
    type: 'Regular',
  };

  //CREATE
  await NotesModel.create(newNoteData);
  //READ
  //let record = await NotesModel.read('5e7ea9410ee50825a591a1f4');
  //console.log('This record\'s been found!', record);
  //DELETE
  //await NotesModel.delete('5e7ea9410ee50825a591a1f4');



  //OLD try/catch block - was in use before the notes-model class wrapper was added - Keep for reference
  //   try{
  //     let newNote = new NotesModel(newNoteData);
  //     await newNote.save();
  //   } catch(e) {
  //     console.error('Nope, got caught in the catch block');
  //   }

  
  mongoose.disconnect();
};


dbOps();






