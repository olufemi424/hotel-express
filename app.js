const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1. MIDDLEWARES
app.use(morgan('dev')); // logger middleware
app.use(express.json()); // built json middleware

app.use((req, res, next) => {
  console.log('Hello from the middle ware 🌼');
  next();
});

app.use((req, res, next) => {
  req.reqestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//Start Server
module.exports = app;
