const express = require('express');
const helloRouter = require('./routes/hello');

const app = express();

app.listen(5555, () => console.log('app is istening on port 5555'));

app.use('/hello', helloRouter);
