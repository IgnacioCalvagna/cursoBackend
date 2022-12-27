const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.addCart);
router.get("/", cartController.getAll);
router.get("/:id", cartController.getById);

router.get("/:id/products", cartController.getProductFromCart);
router.post("/:id/products", cartController.addProductToCart)

router.delete("/:id",cartController.cleanCart)
router.delete("/:id/products/:id_prod",cartController.removeProductFromCart)


module.exports = router;
