const mongoose = require("mongoose");

import { mongoose } from "mongoose";
class ContenedorMongo {
  constructor({ name, schema }) {
    this.model = mongoose.model(name, schema);
  }

  async save(object) {
    try {
      const newElement = await this.model.create(object);
      return newElement;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getAll() {
    try {
      const allElements = await this.model.find();
      return allElements;
    } catch (e) {
      return e.message;
    }
  }
  async getById(id) {
    try {
      const element = this.model.find(id);
      return element;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteById(id) {
    try {
      arrContenedorProd = arrContenedorProd.filter(
        (producto) => producto.id != id
      );
      return `Delete one success`;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteAll(id) {
    try {
      arrContenedorProd = [];
      return `Delete all success`;
    } catch (e) {
      console.log(e);
    }
  }

  //*  Metodos para el carrito

  async addProductToCart(id, productToADD) {
    const cEncontrado = arrContenedorCart.find((c) => c.id == id);
    try {
      cEncontrado.products.push(productToADD);
    } catch (err) {
      console.log(err.message);
    }
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

module.exports = ContenedorMongo;
