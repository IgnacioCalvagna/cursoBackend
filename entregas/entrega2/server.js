const { promises: fs } = require("fs");

let id;

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }
  async save(object) {
    const productos = await this.getAll();
    try {
      id = productos.length +1
      productos.push({ id, ...object });
      await fs.writeFile(this.ruta, JSON.stringify(productos, null, 2));
      return id;
    } catch (e) {
      console.log(e);
    }
  }

  async getById(id) {

    const productos = await this.getAll();
     const producto =  productos.find(product => product.id === id);
   console.log(JSON.stringify(producto, null, 2))
   ;
  }
  async getAll() {
    try {
      const productos = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(productos);
    } catch (e) {
      return [];
    }
  }
  async deleteById(id) {
    try{
      const productos = await this.getAll();
      const newArrProductos = productos.filter(producto => producto.id !== id)
      await fs.writeFile(this.ruta, JSON.stringify(newArrProductos, null, 2))
    }catch (e) {
      console.log(e)
    }
  }
  async deleteAll (){
    const productos = []
    await fs.writeFile(this.ruta, JSON.stringify(productos))
  }
}

const contenedor = new Contenedor("./products.json");

// contenedor.save({ nombre: "Iphone 12", price:900 });
// contenedor.getById(7)
contenedor.deleteById(3)
// contenedor.deleteAll() 