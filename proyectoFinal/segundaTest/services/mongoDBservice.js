const mongoose = require("mongoose");
const config = require("../config/options");




const init = async () => {
  try {
    mongoose.connect(config.mongo.url, {
      dbName: config.mongo.dbName,
    });
    console.log(`Conectado a MongoDb `);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = init;
