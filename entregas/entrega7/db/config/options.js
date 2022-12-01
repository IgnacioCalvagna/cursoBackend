const options = {
  mysql: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3307,
      user : 'root',
      password : '',
      database : 'coderhouse'
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 10 },
  },
  
  sqlit3:{
    client: "sqlite3",
    connection: {
      filename: "./db/ecommerce.sqlite",
    },
    useNullAsDefault: true,
  }
};

module.exports = {options}; 

