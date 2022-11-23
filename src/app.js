const express = require('express');
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

/** Applying JSON indentation */
app.set('json spaces', 2);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/** Routes */
require('./routes/index')(app);


/** Starting server */
module.exports = app;