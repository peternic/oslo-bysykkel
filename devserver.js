/* global process */
const express = require('express');

const port = process.env.devServerPort || 4000;

const app = express();

app.use('/', express.static('devdata'));

app.listen(port, () => {
  console.log(`Dev server listening on port ${port}`);
});
