const Contenedor = require("../contenedores/ContenedorArchivo");
// const Contenedor = require("../contenedores/ContenedorMemoria");
// const Contenedor = require("../contenedores/ContenedorMongoDb");
// const Contenedor = require("../contenedores/ContenedorFirebase");


const ProductoSchema = require("../models/products")

const Producto = new Contenedor("productos",ProductoSchema);

const admin = true
const adminErrorMsj= "No posees las credenciales para realizar esta operación"

const validarAdmin = ()=>{
  return admin
}

 

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
exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findProduct = await Producto.getById(id);
    findProduct
      ? res.json({ success: true, error: false, findProduct })
      : res
          .status(400)
          .json({ success: false, error: "Producto no encontrado" });
  } catch (e) {
    next(e);
  }
};

exports.addProduct = async (req, res, next) => {
  const body  = req.body;
  if(!admin) res.json({ success: false, error: adminErrorMsj})
  // body.timestamp = Date.now() 
  const newProduct = await Producto.save(body);
  res.json({ newProduct });
};
exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const { title, price, quentity, img } = req.body;
  try {
    // if(!admin) res.json({ success: false, error: adminErrorMsj})
    await Producto.update(id, title, price, quentity, img);
    res.json({ success: true, error: false });
  } catch (e) {
    res.json({ success: false, error: e.message });
    next(e);
  }
};
exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(!admin) res.json({ success: false, error: adminErrorMsj})
    await Producto.deleteById(id);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};
