const Contenedor = require("../contenedor");
const Producto = new Contenedor("./productos.json");

exports.getAll = async (req, res) => {
  const productos = await Producto.getAll();
  res.render("productos.pug", { productos });
};
exports.add = (req, res) => {
  const { title, price, quantity, img } = req.body;
  try {
    Producto.save({ title, price, quantity, img });
    res.render("form");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};



//* Rutas de vistas *****

exports.renderProducts = (req, res) => {
  res.render("productos");
};

exports.renderForm = (req, res) => {
  res.render("form");
};
