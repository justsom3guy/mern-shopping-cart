const express = require("express");
const mongoose = require("mongoose");
const bodeParser = require("body-parser");
const items = require("./routes/api/items");

require("dotenv").config();

const app = express();

app.use(bodeParser.json());

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.error(err));

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
