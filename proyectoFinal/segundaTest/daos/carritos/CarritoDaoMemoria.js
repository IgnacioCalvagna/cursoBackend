const ContenedorMemoria = require("../../contenedores/ContenedorMemoria")


class CarritoDaoMemoria extends ContenedorMemoria{
    constructor(){
        super("carrito")
    }
}


module.exports=CarritoDaoMemoria