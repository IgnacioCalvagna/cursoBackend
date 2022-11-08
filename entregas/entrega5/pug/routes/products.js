const router  = require('express').Router()

const productosController = require("../controllers/productosController")

router.get("/",productosController.getAll)
router.post('/add',productosController.add )

router.get('/productos',productosController.renderProducts)
router.get('/add',productosController.renderForm)

module.exports =router