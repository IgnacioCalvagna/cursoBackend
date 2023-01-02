require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const mongoConnect = require("./db/db");
const Contenedor = require("./Containers/Contenedor");
const MongoContainer = require("./Containers/MongoContainer");
const losProductos = new Contenedor("./productos.json");
const losMensajes = new MongoContainer("mensajes");
const generateFakeProducts = require("./utils/generatorMockProduct");

//IMPLEMENTACION






mongoConnect();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on("connection", async (socket) => {
  const mensajitos = await losMensajes.getAll();
  let productosFake = generateFakeProducts(5);
  console.log(`se conecto un usuario SERVER con el id: ${socket.id}`);
  let fecha = new Date();

  io.sockets.emit("products", productosFake);
  io.sockets.emit("mensajes", [...mensajitos]);


  

  socket.on("msj", (data) => {
    losMensajes.save({ data: data, fecha });
    
  });

  socket.on("product", (data) => {
    losProductos.save({ data: data, fecha });
  });
});




httpServer.listen(PORT, () =>
  console.log(`SERVER ON http://localhost:${PORT}`)
);
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
