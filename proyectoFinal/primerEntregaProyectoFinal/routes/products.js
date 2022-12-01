const router = require("express").Router();
const productController = require("../controllers/productsController");

const Contenedor = require("../Contenedor");
const Producto = new Contenedor("./products.json");

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.addProduct);
router.put("/:id", productController.edit);
router.delete("/:id", productController.deleteById);
module.exports = router;
    


