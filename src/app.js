const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// use methods libs
require('dotenv').config();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/', require('./routes/index.routes'));

module.exports = app;