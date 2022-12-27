const ContenedorArchivo = require('../../contenedores/ContenedorArchivos')

class ProductoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super("./data/products.json")
    }
}


module.exports= ProductoDaoArchivo