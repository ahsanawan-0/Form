const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sajjad:sajjad12345@cluster4.mt2gz.mongodb.net/form"
    );
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error");
  }
};

module.exports = connectDB;
