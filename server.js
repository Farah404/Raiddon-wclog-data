var express = require('express');
const createError = require('http-errors');
var app = express();
const scheduledFunctions = require('./scheduledFunctions')

var jsonParser = express.json({ extended: true });
app.use(jsonParser);

// Call to execute scheduled function(s)
scheduledFunctions.initScheduledJobs();

// CORS enabled with express/node-js :
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //ou avec "www.xyz.com" à la place de "*" en production
    res.header("Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, PATCH"); //default: GET, ...
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
      //to give access to all the methods provided
      return res.status(200).json({});
    }
    next();
  });

  app.use('/html', express.static(__dirname + "/html"));
app.get('/', function (req, res) {
  res.redirect('/html/index.html');
});

//Generating error page
app.use(async (res, req, next) => {
  next(createError.NotFound())
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
      error: {
          status: err.status ||500,
          message: err.message
      }
  })
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
