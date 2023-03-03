const ErrorResponse = require('../middleware/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const summarySchema = require('../db/schemas/summarySchema');

// @desc    создание
// @rout    POST /ISIN
exports.createSnapShot = asyncHandler(async (req, res, next) => {
    // здесь ты делаешь дестрактуризацию, сохраняешь переменные прямо из тела запроса,
    // типа тело запроса: {foo: bar}, получаем: const {foo} = req.body
    const { yammy, title } = req.body;
  
    const result = await summarySchema.create({ yammy, title });
    await result.save();
  
    res.status(200).json({success: true, result})
  })

  exports.getAlldata = asyncHandler(async (req, res, next) => {
    const alldata = await summarySchema.find();
  
    res.status(200).json({success: true, items: alldata})
  })