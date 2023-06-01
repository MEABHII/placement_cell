const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/Placement-Cell');
mongoose.connect(
  "mongodb+srv://meabhi:12345@cluster0.3uzgry3.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
