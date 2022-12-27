const { model, Schema } = require("mongoose");


const cartSchema = new Schema({
  products: { type: Array},
  timestamp: { type: String, required: true, max: 45 },

});


const Cart = model('carritos', cartSchema);


module.exports = Cart
