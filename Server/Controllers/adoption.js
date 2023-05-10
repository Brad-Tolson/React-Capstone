const express = require("express");
const router = express.Router();
const { Application } = require("../models");

router.post("/", async (req, res) => {
  const { userId, petId, children, homeType, experience, petHistory } = req.body;
  try {
    const application = await Application.create({
      userId,
      petId,
      children,
      homeType,
      experience,
      petHistory,
    });
    res.status(201).json({ message: "Application created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;