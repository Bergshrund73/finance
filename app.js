const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./openapi.yaml');
const errorHandler = require('./middleware/error')
const dummyRouter = require('./routes/dummy');
require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

// здесь подключаются роуты, можно например сделать app.use('/api/v1/dummy', dummyRouter);
app.use('/dummy', dummyRouter);

// подключение сваггера
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// здесь подключается кастомный обработчик ошибок
app.use(errorHandler);

module.exports = app;
