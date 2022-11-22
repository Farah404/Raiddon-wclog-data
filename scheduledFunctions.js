const { MongoClient, ServerApiVersion } = require("mongodb");
const fetch = require("node-fetch");
const CronJob = require("node-cron");
const apiKey = "9c38aa856a18de779086f84307068fd4";
const uri =
  "mongodb+srv://farah404:SOuIRzWFWYAYk5SK@raiddon.8ypyold.mongodb.net/?retryWrites=true&w=majority";
const name = "anomaly";
const server = "auberdine";
const region = "eu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// # ┌───────────── minute (0 - 59)
// # │ ┌───────────── hour (0 - 23)
// # │ │ ┌───────────── day of the month (1 - 31)
// # │ │ │ ┌───────────── month (1 - 12)
// # │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
// # │ │ │ │ │                                   7 is also Sunday on some systems)
// # │ │ │ │ │                                   OR sun, mon, tue, wed, thu, fri, sat
// # │ │ │ │ │
// # * * * * *
exports.initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {

const databaseName = "raiddon-wclog-api";
const connect = client.db(databaseName);
connect.dropDatabase();
console.log("Dropping successful");

client.connect((err) => {
  const collection1 = client.db("raiddon-wclog-api").collection("encounters");
  const collection2 = client.db("raiddon-wclog-api").collection("classes");
  const collection3 = client.db("raiddon-wclog-api").collection("reports");

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/734?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 1 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/742?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 2 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101107?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 3 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101108?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 4 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101109?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 5 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101110?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 5 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101111?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 6 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101112?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 7 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101113?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 8 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101114?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 9 collection inserted into Raiddon db");
      });
    });

  fetch(
    "https://www.warcraftlogs.com:443/v1/rankings/encounter/101115?api_key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.rankings;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Encounter 10 collection inserted into Raiddon db");
      });
    });




    fetch(
      "https://www.warcraftlogs.com:443/v1/classes?api_key=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        myobj = data;
        collection2.insertMany(myobj, function (err, res) {
          if (err) throw err;
          console.log("Classes collection inserted into Raiddon db");
        });
      });

      fetch(
        "https://classic.warcraftlogs.com/v1/report/fights/FmdY6j72wW19kMQp?translate=true&api_key=" +
          apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.fights;
          collection3.insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Report 1 collection inserted into Raiddon db");
          });
        });

        fetch(
          "https://classic.warcraftlogs.com/v1/report/fights/CfRXjryb843HvKc9?translate=true&api_key=" +
            apiKey
        )
          .then((response) => response.json())
          .then((data) => {
            myobj = data.fights;
            collection3.insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log("Report 2 collection inserted into Raiddon db");
            });
          });

          fetch(
            "https://classic.warcraftlogs.com/v1/report/fights/J3jYnR2ZXrtaBQwb?translate=true&api_key=" +
              apiKey
          )
            .then((response) => response.json())
            .then((data) => {
              myobj = data.fights;
              collection3.insertMany(myobj, function (err, res) {
                if (err) throw err;
                console.log("Report 3 collection inserted into Raiddon db");
              });
            });

            fetch(
              "https://classic.warcraftlogs.com/v1/report/fights/QVDrA9aJdHzBp462?translate=true&api_key=" +
                apiKey
            )
              .then((response) => response.json())
              .then((data) => {
                myobj = data.fights;
                collection3.insertMany(myobj, function (err, res) {
                  if (err) throw err;
                  console.log("Report 4 collection inserted into Raiddon db");
                });
              });

              fetch(
                "https://classic.warcraftlogs.com/v1/report/fights/4wJ9ZCTaYDzHLj1K?translate=true&api_key=" +
                  apiKey
              )
                .then((response) => response.json())
                .then((data) => {
                  myobj = data.fights;
                  collection3.insertMany(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("Report 5 collection inserted into Raiddon db");
                  });
                });
    
  

});

});
scheduledJobFunction.start();
};
