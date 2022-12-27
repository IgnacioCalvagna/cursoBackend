const init = require("../services/mongoDBservice")


const {
  CarritoDaoFirebase,
  CarritoDaoMongo,
  CarritoDaoMemoria,
  CarritosDaoArchivo,
} = require("./carritos/index");
const {
  ProductosDaoArchivo,
  ProdcutoDaoMemoria,
  ProductosDaoMongo,
  ProductosDaoFirebase,
   
} = require("./productos/index");

const testInst = [
  {
    ProuctDao: new ProdcutoDaoMemoria(),
    CartDao: new CarritoDaoMemoria(),
    id: "memoria",
  },
  {
    ProuctDao: new ProductosDaoFirebase(),
    CartDao: new CarritoDaoFirebase(),
    id:"firebase"
  },
  {
    ProuctDao: new ProductosDaoArchivo(),
    CartDao: new CarritosDaoArchivo(),
    id: "archivo",
  },
   {
    ProuctDao: new ProductosDaoMongo(),
    CartDao: new CarritoDaoMongo(),
    id:"mongo"
  }
];

const instancia = testInst.find((item) => item.id == process.env.SELECTED_DB);

if(instancia === "mongo"){
   init()
}


module.exports = instancia;
