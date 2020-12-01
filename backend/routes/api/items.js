const express = require("express");
const router = express.Router();

const Items = require("../../models/items");

router.get("/", (req, res) => {
  Items.find()
    .sort({ date: -1 })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  const newItem = new Items({
    name: req.body.name,
  });
  newItem
    .save()
    .then(() => {
      res.status(201).json({ message: "Successfully added." });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.delete("/:id", (req, res) => {
  Items.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: "Item deleted" });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

module.exports = router;
