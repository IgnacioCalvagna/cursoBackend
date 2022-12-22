const { model, Schema } = require("mongoose");


const cartSchema = new Schema({
  products: { type: []},
  timestamp: { type: String, required: true, max: 45 },

});


const Cart = model('carritos', cartSchema);


module.exports = cartSchema
