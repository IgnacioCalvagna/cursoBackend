const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");

const Contenedor = require("./Contenedor");
const Producto = new Contenedor("./products.json");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mundo.");
});

app.get("/products", async (req, res) => {
  const productos = await Producto.getAll();
  res.send(productos);
});

app.get("/randomProduct", async (req, res) => {
  const numRandom = await Producto.getRandom();
  const randomProduct = await Producto.getById(numRandom);
  res.send(randomProduct);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} ✅`);
});
