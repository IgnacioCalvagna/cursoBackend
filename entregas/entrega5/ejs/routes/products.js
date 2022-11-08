const  router = require('express').Router()

const productController = require('../controllers/productsController')

router.get("/",productController.getAll)

router.get('/add',productController.renderForm)

router.post('/add',productController.add)

module.exports =router