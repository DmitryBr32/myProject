const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const tokenRouter = require('./routes/token.router');
const authRouter = require('./routes/auth.router')
const boardRouter = require('./routes/board.router');
const linkRouter = require('./routes/link.router');
const { removeXPoweredBy } = require('./middlewares/common');

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

app.use(removeXPoweredBy)

app.use('/api/tokens', tokenRouter);
app.use('/api/auth', authRouter);
app.use('/api/board', boardRouter);
app.use('/api/link', linkRouter);

//app.use('/', mainRouter);

module.exports = app;
