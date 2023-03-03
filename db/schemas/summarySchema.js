const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const summarySchema = new Schema({
  date: {
      type: Date,
      required: true,
      unique: true,
      default: Date.now
    },
  summcash: {
    type: Number,
    required: true,
    },
  summBlackDay: {
    type: Number,
    required: true,
    },
  summBankDepositBrokerCash: {
    type: Number,
    required: true,
    },
  summBonds: {
    type: Number,
    required: true,
    },
  summStocks: {
    type: Number,
    required: true,
    },
  summAlter: {
    type: Number,
    required: true,
    },
  summTactic: {
    type: Number,
    required: true,
    },
  exchageUsdRub: {
    type: Number,
    required: true,
    }
  },
  {
    versionKey: false
  });

  const SummarySchema = model('summary', summarySchema);

  module.exports = SummarySchema;