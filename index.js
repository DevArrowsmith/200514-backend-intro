const express = require('express');

const app = express();

app.listen(5555, () => console.log('app is istening on port 5555'));

app.get('/', (req, res) => {
  console.log(req);
  res.status(200).send('Hello there!');
});

