'use strict';
const mongoose = require('mongoose');
const notesMongooseModel = require('./notes-schema.js');

class Model {
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  async create(record) {
    try {
      let createRecord = new this.model(record);
      return await createRecord.save();
    } catch (e) {
      // eslint-disable-next-line no-useless-escape
      console.error(`Something wrong with your CREATE function  ¯\_(ツ)_/¯`);
      return false;
    }
  }

  async read(_id) {
    try {
      //next line verifies if the ID is the correct type
      if (!typeof _id === mongoose.ObjectId) throw 'err';
      //Next line always returns an array
      let readRecord = await this.model.find({ _id });
      //Check array, ensure something is found
      if (readRecord.length) return readRecord[0];
      else throw 'err';
    } catch (e) {
      // eslint-disable-next-line no-useless-escape
      console.log(`Something's wrong with your READ function ¯\_(ツ)_/¯`);
      return false;
    }
  }

  async update(_id, changedRecord){
    try {
      let updateRecordId = await this.model.findByIdAndUpdate({_id}, changedRecord);
      return updateRecordId;
    } catch (e) {
      // eslint-disable-next-line no-useless-escape
      console.log(`Something's wrong with your UPDATE function ¯\_(ツ)_/¯`);
      return false;
    }
  }


  //Can NOT get the delete function to operate correctly, I've tried a ton of different ways - need help! 
  async delete(_id) {
    // try {
    // //Ensure it's an ID
    //   if (!typeof _id === mongoose.ObjectId) throw 'err';
    //   console.log('Delete funtion confirmed ID');
    //   //set a variable
    //   let findRecord = await this.model.find({ _id});
    //   //use the 
    //   await this.model.deleteOne(findRecord);
    // } catch (e) {
    //   console.error(`Something's wrong with your DELETE function`);
    // }

    try {
      this.model.findOneAndDelete({ _id });
    } catch (e) {
      // eslint-disable-next-line no-useless-escape
      console.log(`Something's wrong with your UPDATE function ¯\_(ツ)_/¯`);
      return false;
    }
  }
}

//Mongoose model, also schema
let notesModel = new Model(notesMongooseModel);

module.exports = notesModel;


//If doing multiple collections, could also do:
//let moreNotesModel = new Model(moreNotesMongooseModel) AND
//module.exports = {notesModel, moreNotesModel}