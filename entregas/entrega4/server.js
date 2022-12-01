const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const router = require("./routes");
const morgan = require("morgan");
const path = require("path");
const Producto = require("./controllers/productController");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.post("/", (req, res) => {
  const body = req.body;
  try {
    Producto.addProduct(body);
    res.json({ success: true, error: false });
  } catch (err) {
    res.json({ error: true, e: err });
  }
});

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} ✅`);
});
