const router = require('express').Router();
const products = require('./products')
const carts = require("./cart")



router.use("/products",products)
router.use("/carts",carts)

module.exports=router