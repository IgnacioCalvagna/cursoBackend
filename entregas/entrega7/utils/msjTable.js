const { options } = require("../db/config/options");
const knex = require("knex")(options.sqlit3);

/* Crear la tabla de mensajes*/
knex.schema
    .createTable("mensajes", (table) => {
        table.increments("id"),
            table.string("user"),
            table.string("msj");
            table.date("fecha")
    })
    .then(() => {
        console.log(`Created table `);
    })
    .catch((err) => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => {
        knex.destroy();
    });

/*  Insertar todo el array de mensajes  */
knex("mensajes")
    .insert([
        {
          "user":"ignaciocalvagna@gmail.com",
          "msj":"Hola loquitas ",
          "fecha":Date.now(),
        }
    ])
    .then(() => {
        console.log(`added message `);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
