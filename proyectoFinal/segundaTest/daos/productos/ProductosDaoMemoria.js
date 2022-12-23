const ContenedorMemoria = require("../../contenedores/ContenedorMemoria")


class ProdcutoDaoMemoria extends ContenedorMemoria{
    constructor(){
        super("producto")
    }
}

module.exports=ProdcutoDaoMemoria