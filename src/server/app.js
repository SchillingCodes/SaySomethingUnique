const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV}`)});
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../dist')});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});