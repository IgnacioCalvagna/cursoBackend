const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    console.log(`Conected mongoDb`);
  } catch (e) {
    console.log(`Error connecting to MongoDB`);
  }
};

module.exports = mongoConnect;
