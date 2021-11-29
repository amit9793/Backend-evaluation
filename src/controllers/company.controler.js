const express = require("express");

const Company = require("../models/company_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Company.create(req.body);
    return res.status(201).send(user);
  });

  router.get("/details", async (req, res) => {
    const user = await Company.find();
    return res.status(201).send(user);
  });

  router.get("/open_job", async (req, res) => {
    const user = await Company.find({open_job :{$gt:0}});
    return res.status(201).send(user);
  });

  module.exports = router;