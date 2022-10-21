const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");

const productosController = require("../entrega2/server");
const productos = require("../entrega2/products.json");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hola mundo.");
});

app.get("/products", (req, res) => {
  res.json(productos);
});

app.get("/randomProduct", async (req, res) => {
  const numRandom = Math.floor(
    Math.random(productos.length) * productos.length
  );

  const randomProduct = await productos[numRandom];

  res.json(randomProduct);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
});
