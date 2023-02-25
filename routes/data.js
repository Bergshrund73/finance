const express = require('express');
const router = express.Router();

const {
    getAlldata,
    //getById,
    createISIN//,
    //update,
    //deleteById,
  } = require('../controllers/dataController')

  router.route('/')
  .post(createISIN)
  .get(getAlldata)

  module.exports = router;