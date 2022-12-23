const { model, Schema } = require("mongoose");


const productSchema = new Schema({
    title: { type: String, required: true, max: 45 },
    price: { type: Number, required: true, max: 45 },
    codigo:{type: String, required:true},
    stock:{type: Number, required:true},
    img: { type: String, required: true, max: 45 },
    timestamp: { type: String, required: true, max: 45 },
});


const Product = model('productos', productSchema);


module.exports = productSchema
