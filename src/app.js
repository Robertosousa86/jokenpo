const express = require('express');
const cors = require('cors');
const app = express();

const JokenpoRouter = require('./routes/JokenpoRouter');

app.use(cors());
app.use(express.static('www'));
app.use(express.json());

app.use(JokenpoRouter);

module.exports = app;
