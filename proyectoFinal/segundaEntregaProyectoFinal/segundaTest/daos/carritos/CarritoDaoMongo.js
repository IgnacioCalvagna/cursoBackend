const ContenedorMongo = require("../../contenedores/ContenedorMongo");
const Cart = require("../../models/cart.js");

class CarritoDaoMongo extends ContenedorMongo {
  constructor() {
    super(Cart);
  }

  async addProductToCart(id, productToADD) {
    
    const updateElement = await this.model.findOneAndUpdate({_id:id},{$push:{"products":productToADD}})

    return productToADD

    //   try {
    // const cEncontrado = await this.getById(id);
          
    //   cEncontrado.products.push(productToADD);
      
    //     return  cEncontrado.products
    // } catch (err) {
    //   console.log(err.message);
    // }



  }
  async viewProductInCart(id) {
    const cEncontrado = arrContenedorCart.find((c) => c.id == id);

    return cEncontrado.products;
  }
  async cleanCart(id) {
    const cEncontrado = arrContenedorCart.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = [];
    } catch (err) {
      console.log(err.message);
    }
  }
  async deleteProductFromCart(id, productToRemove) {
    const cEncontrado = arrContenedorCart.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = cEncontrado.products.filter(
        (prod) => prod.id != productToRemove
      );
    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = CarritoDaoMongo;
