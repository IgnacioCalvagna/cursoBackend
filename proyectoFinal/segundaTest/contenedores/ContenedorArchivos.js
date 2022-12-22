const { promises: fs } = require("fs");
let id;

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }
  //*  Metodos para productos
  async save(object) {
    let productos = await this.getAll();
    try {
      id = productos.length + 1;
      productos.push({ id, ...object });
      await fs.writeFile(this.ruta, JSON.stringify(productos, null, 2));
      return object;
    } catch (e) {
      console.log(e);
    }
  }
  async getRandom() {
    const productos = await this.getAll();
    const numRandom = Math.floor(
      Math.random(productos.length + 1) * productos.length + 1
    );
    return numRandom;
  }
  async getById(id) {
    try {
      const productos = await this.getAll();
      const producto = productos.find((product) => product.id == id);
      const miProd = JSON.stringify(producto);
      return JSON.parse(miProd);
    } catch (e) {
      console.log(e);
    }
  }
  async getAll() {
    try {
      const productos = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(productos);
    } catch (e) {
      return [];
    }
  }
  async update(id, title, price, quentity, img) {
    const productos = await this.getAll();
    const producto = productos.find((product) => product.id == id);

    producto.title = title;
    producto.price = price;
    producto.quentity = quentity;
    producto.img = img;

    console.log(producto);
    await fs.writeFile(this.ruta, JSON.stringify(productos, null, 2));
    return producto;
  }
  async deleteById(id) {
    try {
      const productos = await this.getAll();
      const newArrProductos = productos.filter((producto) => producto.id != id);
      await fs.writeFile(this.ruta, JSON.stringify(newArrProductos, null, 2));
    } catch (e) {
      console.log(e);
    }
  }
  async deleteAll() {
    try {
      const productos = [];
      await fs.writeFile(this.ruta, JSON.stringify(productos));
    } catch (e) {
      console.log(e);
    }
  }

  //*  Metodos para el carrito
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
module.exports = Contenedor;
