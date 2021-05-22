const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});