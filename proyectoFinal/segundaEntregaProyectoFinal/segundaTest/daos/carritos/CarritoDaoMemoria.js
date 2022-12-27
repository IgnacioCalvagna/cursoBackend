const ContenedorMemoria = require("../../contenedores/ContenedorMemoria");

class CarritoDaoMemoria extends ContenedorMemoria {
  constructor() {
    super("carrito");
  }

  async addProductToCart(id, productToADD) {
    const cEncontrado = this.arr.find((c) => c.id == id);
    try {
      cEncontrado.products.push(productToADD);
    } catch (err) {
      console.log(err.message);
    }
  }
  async viewProductInCart(id) {
    const cEncontrado = this.arr.find((c) => c.id == id);

    return cEncontrado.products;
  }
  async cleanCart(id) {
    const cEncontrado = this.arr.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = [];
    } catch (err) {
      console.log(err.message);
    }
  }
  async deleteProductFromCart(id, productToRemove) {
    const cEncontrado = this.arr.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = cEncontrado.products.filter(
        (prod) => prod.id != productToRemove
      );
    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = CarritoDaoMemoria;
