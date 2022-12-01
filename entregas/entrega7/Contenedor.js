const knex = require("knex");

class Contenedor {
  constructor(table) {
    this.table = table;
  }

  async save(object) {
    try {
      await knex(this.table).insert(object);
      console.log(`Success ${object}`);
    } catch (err) {
      console.log(`error -> ${err.message}`);
    }
  }
  async getAll() {
    try {
       knex.from(`${this.table}`).select("*")
      .then(res=>{

        return res;
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = Contenedor;
