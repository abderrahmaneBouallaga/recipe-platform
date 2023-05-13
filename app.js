const express = require('express');
const app = express();
const recipeRouter = require('./routes/recipeRoutes');
const globalErrorHandler = require('./controllers/errController');

app.use(express.json())
app.use('/api/v1/recipes', recipeRouter);



app.use(globalErrorHandler);
module.exports = app;