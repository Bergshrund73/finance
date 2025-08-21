const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const summarySchema = new Schema({
  date: {
      type: Date,
      required: true,
      unique: true,
      default: Date.now
    },
  summCashRub: {
    type: Number,
    required: true,
    },
  summCashUsd: {
    type: Number,
    required: true,
    },
  summBankOpen: {
    type: Number,
    required: true,
    },
  summBroker: {
    type: Number,
    required: true,
    },
  exchageUsdRub: {
    type: Number,
    required: true,
    },
  summTotal: {
      type: Number,
      required: false,
      },  
  },
  {
    versionKey: false
  });

  const SummarySchema = model('summary', summarySchema);

  module.exports = SummarySchema;