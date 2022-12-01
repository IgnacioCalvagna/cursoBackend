const { options } = require("../db/config/options");
const knex = require("knex")(options.mysql);

class Product {
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
      const productsList = await knex(this.table).select("*");
      return productsList.length > 0 ? productsList : [];
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Product;
