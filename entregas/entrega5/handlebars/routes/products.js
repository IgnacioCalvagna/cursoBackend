const router = require("express").Router();

const productsController = require("../controllers/productController");

router.get("/", productsController.getAll);
router.get("/add", productsController.form);
router.post("/add", productsController.add);

module.exports = router;
