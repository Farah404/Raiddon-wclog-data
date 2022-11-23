module.exports = (app) => {
  app.use("/", require("./app"));
  app.use("/", require("./app/index"));

  app.use('/api', require('./app/encounters'))
  app.use('/api', require('./app/reports'))

  app.use("*", function (req, res) {
    res.redirect("/");
  });
};
