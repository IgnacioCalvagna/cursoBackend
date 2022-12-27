const ContenedorArchivo = require('../../contenedores/ContenedorArchivos')
const { promises: fs } = require("fs");
class CarritoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super("./data/carts.json")
       
    }
    async addProductToCart(id, productToADD) {
        const carritos = await this.getAll();
        const cEncontrado = carritos.find((c) => c.id == id);
    
        try {
          cEncontrado.products.push(productToADD);
          await fs.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
        } catch (err) {
          console.log(err.message);
        }
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


module.exports= CarritoDaoArchivo