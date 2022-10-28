const Contenedor = require("../Contenedor");
const Producto = new Contenedor("./products.json");


exports.getAll = async (req, res, next) => {
    try {
      const productos = await Producto.getAll();
      if (!productos[0]) {
        res.json("no hay productos");
      }
      res.json(productos);
    } catch (e) {
      next(e);
    }
  };
  
exports.getById=async (req, res, next) => {
    try {
      const { id } = req.params;
      const findProduct = await Producto.getById(id);
      findProduct
        ? res.json({ success: true, error: false, findProduct })
        : res.json({ success: false, error: "Producto no encontrado" });
    } catch (e) {
      next(e);
    }
  }

  exports.addProduct=async (req, res, next) => {
    const { body } = req;
    const newProduct = await Producto.save(body);
    console.log(newProduct);
    res.json( newProduct );
  }

  exports.edit=  async (req, res, next) => {
    const { id } = req.params;
    const { title, price, quentity, img } = req.body;
    try {
      await Producto.update(id, title, price, quentity, img);
  
      res.json({ success: true, error: false });
    } catch (e) {
      res.json({ success: false, error: e.message });
      next(e);
    }
  }


  exports.deleteById =  async (req, res, next) => {
    const { id } = req.params;
    try {
      await Producto.deleteById(id);
  
      res.json({ success: true });
    } catch (e) {
      next(e);
    }
  }