const router = require("express").Router();
const productController = require("../controllers/productsController");

const Contenedor = require("../Contenedor");
const Producto = new Contenedor("./products.json");

router.get("/", async (req, res, next) => {
  try {
    const productos = await Producto.getAll();
    if (!productos[0]) {
        res.json("no hay productos");
    }
    
    res.json(productos);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", productController.getById);
router.post("/", productController.addProduct);
router.put("/:id", productController.edit);
router.delete("/:id", productController.deleteById);
module.exports = router;
