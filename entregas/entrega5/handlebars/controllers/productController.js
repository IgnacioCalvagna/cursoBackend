const Contenedor = require('../contenedor')
const Producto = new Contenedor("./productos.json")

exports.getAll = async (req, res, next) => {
  try {
    const productos = await Producto.getAll();
    if (!productos[0]) {
      next()
    }
    res.render("productos", { productos });
  } catch (e) {
    next(e);
  }
};
exports.add = (req, res, next) => {
  const { title, price,quantity,img } = req.body;
  const newProduct = { title, price,quantity, img };
  Producto.save(newProduct);
  res.render("form");
};

exports.form = (req, res, next) => {
  try {
    res.render("form");
  } catch (e) {
    next(e);
  }
};
