const { model, Schema } = require("mongoose");


const productSchema = new Schema({
    title: { type: String, required: true, max: 45 },
    price: { type: Number, required: true, },
    codigo:{type: String, required:true},
    stock:{type: Number, required:true},
    img: { type: String,  max: 255 },
    timestamp: { type: String,  max: 45 },
});


const Product = model('productos', productSchema);


module.exports = Product
