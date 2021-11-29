const express = require("express");

const Job = require("../models/job_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Job.create(req.body);
    return res.status(201).send(user);
  });

  router.get("/work_from_home", async (req, res) => {
    const user = await Job.find({"work_from_home":"Yes"});
    return res.status(201).send(user);
  });
  
  router.get("/notice", async (req, res) => {
    const user = await Job.find({"notice":"2"});
    return res.status(201).send(user);
  });

  router.get("/:wfh", async (req, res) => {
    const user = await Job.find();
    
    
    return res.status(201).send(user);
  });

  router.get("/rating", async (req, res) => {
    const user = await Job.find({rating:{$gt:0}});
    
    return res.status(201).send(user);
  });



  module.exports = router;

  