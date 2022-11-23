var express = require("express");
var router = express.Router();
const dbo = require('../../config/db_config');


router.route("/reports").get(async function(req, res){
  const dbConnect = dbo.getDb();


dbConnect
.collection('reports')
.find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});


module.exports = router;