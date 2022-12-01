const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.post("/", productController.addProduct);
router.get("/:id", productController.getById);
router.put("/:id",productController.edit);
router.delete("/:id", productController.deleteById);

module.exports = router;



