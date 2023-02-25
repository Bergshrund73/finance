const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const dataSchema = new Schema({
    yammy: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: false,
      default: 'dataDummy-Yammy'
    },
  });

  const DataSchema = model('data', dataSchema);

  module.exports = DataSchema;