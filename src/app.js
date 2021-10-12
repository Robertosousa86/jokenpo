const express = require('express');
const app = express();

const JokenpoRouter = require('./routes/JokenpoRouter');

app.use(express.json());

app.use(JokenpoRouter);

module.exports = app;
