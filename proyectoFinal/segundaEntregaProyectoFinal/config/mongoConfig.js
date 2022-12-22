const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/segundaEntregaPF', {
      useNewUrlParser: true,
    });
    console.log(`Conectado a mongoDb `);
  } catch (e) {
    console.log('ERROR---->', e);
    throw `no se pudo conectar a mongoDb`;
  }
};

module.exports = { connection };
