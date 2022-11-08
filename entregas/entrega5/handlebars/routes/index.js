const router = require('express').Router()
const products = require('./products')


router.use("/productos",products)




module.exports = router

