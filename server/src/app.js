const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const tokenRouter = require('./routes/token.router');
const authRouter = require('./routes/auth.router')
//const exRouter = require('./routes/ex.router')

const app = express();

const corsConfig = {
  origin: ['http://localhost:5173'],
  credentials: true,
};

app.use(cors(corsConfig));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/tokens', tokenRouter);
app.use('/api/auth', authRouter);
//app.use('/api/ex', exRouter);

//app.use('/', mainRouter);

module.exports = app;
