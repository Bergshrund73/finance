const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const summarySchema = new Schema({
    yammy: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: false,
      default: 'summDummy-Yammy'
    },
  });

  const SummarySchema = model('summary', summarySchema);

  module.exports = SummarySchema;