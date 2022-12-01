const { options } = require("../db/config/options");
const knex = require("knex")(options.mysql);

knex.schema
  .createTable("productos", (t) => {
    t.increments("id"),
      t.string("title"),
      t.double("price"),
      t.integer("stock"),
      t.string("codigo");
      t.string("img");
  })
  .then(() => {
    console.log(`Database created`);
  })
  .catch((err) => {
    console.log(`ERROR -->  ${err}`);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });

  knex("productos")
    .insert([
        {
            "title": "Iphone 8 se",
            "price": 750,
            "stock":80,
            "codigo":"IP8DS",
            "img":""
        },
        {
            "title": "Iphone XS ",
            "price": 750,
            "stock":80,
            "codigo":"IP8DS",
            "img":""
        },
        {
            "title": "Iphone 7 Plus",
            "price": 750,
            "stock":80,
            "codigo":"IP8DS",
            "img":""
        }
       
    ])
    .then(() => {
        console.log(`Added Products `);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
