const ContainerFirebase = require("../../contenedores/ContenedorFirebase");
const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();
class CarritoDaoFirebase extends ContainerFirebase {
  constructor() {
    super("carritos");
  }
  async addProductToCart(id, productToADD) {
    const carritoRef = db.collection(this.coleccion).doc(id);

   
    // try {
    //   const unionProd = await carritoRef.update({
    //     products: FieldValue.arrayUnion(productToADD),
    //   });
    // } catch (err) {
    //   console.log(err.message);
    // }
    return "Carrito ref",carritoRef
  }

  async viewProductInCart(id) {
    const carts = await this.getAll();
    const cEncontrado = carts.find((c) => c.id == id);

    return cEncontrado.products;
  }

  async cleanCart(id) {
    const carritos = await this.getAll();
    const cEncontrado = carritos.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = [];
      await fs.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
    } catch (err) {
      console.log(err.message);
    }
  }
  async deleteProductFromCart(id, productToRemove) {
    const carritos = await this.getAll();
    const cEncontrado = carritos.find((carrito) => carrito.id == id);
    try {
      cEncontrado.products = cEncontrado.products.filter(
        (prod) => prod.id != productToRemove
      );
      await fs.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
    } catch (e) {
      console.log(e.message);
    }
  }
 
}

module.exports = CarritoDaoFirebase;
