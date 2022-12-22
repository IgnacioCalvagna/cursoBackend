const router = require("express").Router();
const productController = require("../controllers/productsController");

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.addProduct);
router.put("/:id", productController.edit);
router.delete("/:id", productController.deleteById);
module.exports = router;
    


