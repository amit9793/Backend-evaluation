

const express = require("express");
const connect = require("./src/configs/db");

const cityControler = require("./src/controllers/city.controler");
const companyControler = require("./src/controllers/company.controler");
const jobControler = require("./src/controllers/job.controler");
const ratingControler = require("./src/controllers/rating.controlers");
const skillControler = require("./src/controllers/skill.controler");
const wfhControler = require("./src/controllers/wfh.controlers");

const app = express();
app.use(express.json());

app.use("/city", cityControler);
app.use("/company", companyControler);
app.use("/job", jobControler);
app.use("/rating", ratingControler);
app.use("/skill", skillControler);
app.use("/wfh", wfhControler);

app.listen(3000, async function () {
  await connect();
  console.log("Port is Running Again." );
});
