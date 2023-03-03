const express = require('express');
const router = express.Router();

const {
    getAlldata,
    //getById,
    createSnapShot,
    //update,
    //deleteById,
  } = require('../controllers/summaryController')

  router.route('/')
  .post(createSnapShot)
  .get(getAlldata)

  module.exports = router;