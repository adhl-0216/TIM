const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

try {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("Mongoose is connected");
      },
      (err) => {
        console.log(err);
      }
    );
} catch (e) {
  console.log(e);
}

require("./job")
require("./jobApplication")
require("./user")
