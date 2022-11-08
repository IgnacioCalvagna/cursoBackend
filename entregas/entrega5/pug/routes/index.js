const { Router } = require('express')
const router = Router()
const products = require('./products')

router.use("/products",products)


module.exports =router