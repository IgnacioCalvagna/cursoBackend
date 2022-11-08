const Contenedor = require("../contenedor");
const Producto = new Contenedor("./productos.json");

exports.getAll = async(req, res) => {
  const productos = await Producto.getAll()
  res.render("productos", { productos });
};

exports.add = (req, res, next) => {
  const { title, price, quantity, img } = req.body;
  try {
    Producto.save({ title, price, quantity, img });
    res.render("form");
  } catch (err) {
    next(err);
  }
};

exports.renderForm = (req, res) => {
  res.render("form");
};
