const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGODB_URI;

try {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => {
        console.log(" Mongoose is connected");
      },
      (err) => {
        console.log(err);
      }
    );
} catch (e) {
  console.log("could not connect");
}
