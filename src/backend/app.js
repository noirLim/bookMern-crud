const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/bookRoutes")
const cors = require('cors')
const app = express();

// Middleware
app.use(express.json())
app.use(cors())
app.use("/books",router)

mongoose
  .connect("mongodb://localhost:27017/BookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("running on port 5000");
});
