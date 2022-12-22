const ContenedorArchivo = require('../../contenedores/ContenedorArchivos')

class CarritoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super("./data/carts.json")
    }
}


module.exports= CarritoDaoArchivo