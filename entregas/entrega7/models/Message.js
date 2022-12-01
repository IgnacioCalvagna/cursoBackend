const { options } = require("../db/config/options");
const knex = require("knex")(options.sqlit3);

class Message {
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
      const messagesList = await knex(this.table).select("*");
      return messagesList.length > 0 ? messagesList : [];
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Message;
