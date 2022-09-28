const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

const PORT = process.env.DB_PORT;

const mainPageRouter = require('./routes/mainPage');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPageRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
