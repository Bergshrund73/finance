const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const dummySchema = new Schema({
  yammy: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: false,
    default: 'Dummy-Yammy'
  },
});

const DummySchema = model('Dummy', dummySchema);

module.exports = DummySchema;
