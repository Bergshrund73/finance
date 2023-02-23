const express = require('express');
const router = express.Router();

const {
  getAllSurveys,
  getById,
  createSurvey,
  update,
  deleteById,
} = require('../controllers/dummyController')

// тут ты задаешь, что для роута /dummy ты задаешь post, get и delete запросы
// при этом /dummy задавался в app.js
router.route('/')
  .post(createSurvey)
  .get(getAllSurveys)
  .delete(deleteById)

// здесь ты указываешь роут /dummy/:id
router.route('/:id')
  .get(getById)
  .put(update)

module.exports = router;
