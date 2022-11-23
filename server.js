require("dotenv").config();
const app = require("./src/app.js");
const scheduledFunctions = require("./scheduledFunctions");
const dbo = require('./src/config/db_config');
var cors = require('cors');

app.use(require('./src/routes/app/encounters'));
app.use(require('./src/routes/app/reports'));


  dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
    app.listen(process.env.PORT || 8085, function () {
      console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
      );
    });
  });
  
  //CORS middleware
  app.use(cors());
  
  
  // Call to execute scheduled function(s)
  scheduledFunctions.initScheduledJobs();