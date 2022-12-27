const ContenedorMongo = require("../../contenedores/ContenedorMongo");
const ProductoSchema = require("../../models/products.js");

class ProductosDaoMongo extends ContenedorMongo {
  constructor() {
    super(ProductoSchema);
  }
  
}


module.exports = ProductosDaoMongo;
