let id;

// let arrContenedorProd = [];

class ContenedorMemoria {
  constructor(element) {
    
    this.element = element;
    this.arr = [];
  }

  async save(object) {
    try {
      id = this.arr.length + 1;
      this.arr = [...this.arr, { id, ...object }];
      return object;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getAll() {
    try {
      return this.arr;
    } catch (e) {
      return e.message;
    }
  }
  async getById(id) {
    try {
      const producto = this.arr.find((product) => product.id == id);
      return producto;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteById(id) {
    try {
      this.arr = this.arr.filter(
        (producto) => producto.id != id
      );
      return `Delete one success`;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteAll(id) {
    try {
      this.arr = [];
      return `Delete all success`;
    } catch (e) {
      console.log(e);
    }
  }

  //*  Metodos para el carrito
}

module.exports = ContenedorMemoria;
