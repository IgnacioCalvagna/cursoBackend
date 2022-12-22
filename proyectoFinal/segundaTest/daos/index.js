// const options = require("../config/options");
// const init = require("../services/mongodbService/index")
// const mongoDbService = require("../services/mongodbService");
require("dotenv").config()
const {
  /* CarritoDaoFirebase,
  CarritoDaoMemoria,
  CarritoDaoMongo, */
  CarritosDaoArchivo,
} = require("./carritos/index");
const {
  ProductosDaoArchivo,
  /* ProdDaoMemoria,
  ProdDaoFirebase,
  ProdDaoMongo, */
} = require("./productos/index");


const testInst = [
 /*  {
    ProuctDao: new ProdDaoMemoria(),
    CartDao: new CarritoDaoMemoria(),
    id:"memoria"
  }, */
  /* {
    ProuctDao: new ProdDaoFirebase(),
    CartDao: new CarritoDaoFirebase(),
    id:"firebase"
  }, */
  {
    ProuctDao: new ProductosDaoArchivo(),
    CartDao: new CarritosDaoArchivo(),
    id:"archivo"
  },
 /*  {
    ProuctDao: new ProdDaoMongo(),
    CartDao: new CarritoDaoMongo(),
    id:"mongo"
  } */

]

const instancia = testInst.find(item => item.id == process.env.SELECTED_DB)



module.exports = instancia;
