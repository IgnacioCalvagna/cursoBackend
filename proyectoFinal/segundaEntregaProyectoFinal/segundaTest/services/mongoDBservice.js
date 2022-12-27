const mongoose = require("mongoose");
const config = require("../config/options");




const init = async () => {
  try {
    mongoose.connect(`mongodb+srv://ignacioCalvagna:${process.env.MONGO_DB_PASSWORD}@satindiback.perxk.mongodb.net/?retryWrites=true&w=majority`,{
      useNewUrlParser: true,
    });
    console.log(`Conectado a MongoDb `);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = init;
