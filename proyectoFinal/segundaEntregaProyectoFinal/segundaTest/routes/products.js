const router = require("express").Router();
const productController = require("../controllers/productsController");
const validarAdmin = require("../middleware/validarAdmin")



router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", validarAdmin, productController.addProduct);
router.put("/:id", validarAdmin, productController.edit);
router.delete("/:id", validarAdmin, productController.deleteById);

module.exports = router;
    


