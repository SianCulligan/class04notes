'use strict';

const supergoose = require('@code-fellows/supergoose');
const NotesModel = require('../lib/models/notes-model.js');

beforeAll(async () => {
  await NotesModel.create({
    name: 'Note 500000',
    category: 11,
    type: 'Regular',
  });

  await NotesModel.create({
    name: `Note 500001`,
    category: 11,
    type: 'Regular',
  });

});


describe ('Database can create', () =>{
  it('uses data to create a notes entry', async () => {
    let response = await NotesModel.create({
      name: 'Note 500000',
      category: 11,
      type: 'Regular',
    });
    console.log('response to create', response);
    expect(response).toBeFalsy();
  });

  it('double names', async () => {
    let response = await NotesModel.create({
      name: 'Note 500000',
      category: 11,
      type: 'Regular',
    });
    console.log(response);
    expect(response).toBeFalsy();
  });
});


describe ('Database can read', () =>{
  it('uses an ID to print a DB record to console', async () => {
    let response = await NotesModel.read({
      _id: "5e7ea9410ee50825a591a1f4",
    });
    console.log('response to read', response);
    expect(response).toBeTruthy();
  });
});

describe ('Database can update', () =>{
  it('uses an ID & a newRecord to update a record in the DB', async () => {
    let response = await NotesModel.update('5e7ea9410ee50825a591a1f4', {"name" : "New note 100"});

    console.log('response to update', response);

    expect(response).toBeTruthy();
  });
});


describe ('Database can delete', () =>{
  it('uses an ID to delete a record from the DB', async () => {
    let response = await NotesModel.delete({
      _id: "5e7ea9410ee50825a591a1f4",
    });
    console.log('response to delete', response);
    expect(response).toBeFalsy();
  });
});
