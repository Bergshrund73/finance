const ErrorResponse = require('../middleware/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const DummySchema = require('../db/schemas/dummySchema');

// @desc    получение списка
// @rout    GET /dummy
exports.getAllSurveys = asyncHandler(async (req, res, next) => {
  const allDummies = await DummySchema.find();

  res.status(200).json({success: true, items: allDummies})
})

// @desc    получение по id
// @rout    GET /dummy/:id
exports.getById = asyncHandler(async (req, res, next) => {
  // этот id берется из параметров типа /dummy/2324
  const id = req.params.id

  const dummy = await DummySchema.findById(id)

  // Если сущность не найдена, то мы создаем ошибку и передаем туда текст и http код ошибки
  if (!dummy) {
    return next(new ErrorResponse(`Сущности с id '${req.params.id}' не найдено`, 404))
  }

  res.status(200).json({success: true})
})

// @desc    создание
// @rout    POST /dummy
exports.createSurvey = asyncHandler(async (req, res, next) => {
  // здесь ты делаешь дестрактуризацию, сохраняешь переменные прямо из тела запроса,
  // типа тело запроса: {foo: bar}, получаем: const {foo} = req.body
  const { yammy, title } = req.body;

  const dummy = await DummySchema.create({ yammy, title });
  await dummy.save();

  res.status(200).json({success: true, dummy})
})

// @desc    обновление
// @rout    PUT /dummy/:id
exports.update = asyncHandler(async (req, res, next) => {
  const id = req.params.id

  res.status(200).json({success: true})
})

// @desc    удаление массива
// @rout    DELETE /dummy?ids[]=
exports.deleteById = asyncHandler(async (req, res, next) => {
  const id = req.params.id

  res.status(200).json({success: true})
})
