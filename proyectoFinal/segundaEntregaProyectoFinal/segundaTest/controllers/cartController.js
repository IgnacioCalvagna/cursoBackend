const instancia = require("../daos/index")

const Carrito = instancia.CartDao
const Producto = instancia.ProuctDao

console.log(Producto , "<------ mi producto")


exports.addCart = async (req, res, next) => {
  const newCart={
      products:[],
      timestamp:Date.now()
  }
  try{
     await Carrito.save(newCart);
     res.json({success:true, error:false,newCart})
  }catch(err){
      res.json({success:false, error:err.message})
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const carritos = await Carrito.getAll();
    res.json({ success: true, carritos });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
};
exports.getById=async (req, res, next)=>{
    const {id} = req.params
    const miCarrito = await Carrito.getById(id)
    res.json({success:true, miCarrito})
}
exports.getProductFromCart= async (req, res, next) => {
    const {id} = req.params
    try {
        const products= await Carrito.viewProductInCart(id)
        res.json({success:true, products})
    }catch(err){
        res.json({success:false, error:err.message})
    }
}
exports.addProductToCart= async (req, res, next) => {
    const {id} = req.params
    const productId = req.body.id
    const productos = await Producto.getAll()




    // const productoToAdd = await productos.find(p=> p.id == productId)
    // const elCarri = await Carrito.addProductToCart(id,productoToAdd)

    res.json(typeof productos)
}



exports.cleanCart=async(req, res, next) => {
    const {id} = req.params
    try {
        Carrito.cleanCart(id)
        res.json({success: true, status:`el carrito con id ${id} quedo vacio `})
    }catch(err) {
        res.json(err)
    }
}
exports.removeProductFromCart= async (req, res, next)=>{
    const {id,id_prod} = req.params
    try{
        await Carrito.deleteProductFromCart(id,id_prod)
        res.json({success: true})

    }catch(err){
        res.json({success: false , error: err.message})
    }
}