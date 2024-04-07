const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes
app.use("/api/products", productRoute)
//
app.get("/", (req, res) => {
  res.send("hello world");
});


mongoose
  .connect(
    "mongodb+srv://admin:mongodb@crud-database.p2oubov.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(() => {
    console.log("failed");
  });
