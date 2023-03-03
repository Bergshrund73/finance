const express = require('express');
const router = express.Router();

const {
    getAlldata,
    addSummRubAll,
    createSnapShot,
    //update,
    //deleteById,
  } = require('../controllers/summaryController')

  router.route('/')
  .post(createSnapShot)
  .get(getAlldata)


  router.route('/addsumruball')
  .post(addSummRubAll)

  module.exports = router;