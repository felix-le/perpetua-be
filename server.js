const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(logger('dev')); //logger in dev mode, comment out in production
app.use(express.json());

// port default is 3000 or can create .env file to set port
const PORT = process.env.PORT || 3000;

app.use('/', routes); // use routes

app.listen(PORT, () => {
  console.log('Server is running on port', 3000);
});
