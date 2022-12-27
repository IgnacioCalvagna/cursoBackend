const instancia = require("../daos/index");

const Producto = instancia.ProuctDao;

exports.getAll = async (req, res, next) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);
  } catch (e) {
    console.log(e.message);
    next(e)
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
  const {body} = req;
  try{
    body.timestamp = Date.now();
    const newProduct = await Producto.save(body);
    res.json({ newProduct });
  }catch(e){
    next(e)
  }
};
exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const { title, price, codigo,stock, img } = req.body;
  try {
    await Producto.update(id, title, price, codigo,stock, img);
    res.json({ success: true, error: false });
  } catch (e) {
    res.json({ success: false, error: e.message });
    next(e);
  }
};
exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Producto.deleteById(id);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
 
};
