const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");

const Producto = require("./models/Product");
const Message = require("./models/Message");

const producto = new Producto("productos");
const mensage = new Message("mensajes ");
//IMPLEMENTACION
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on("connection", async (socket) => {
  const mensajitos = await mensage.getAll();
  const productitos = await producto.getAll();
  console.log(`se conecto un usuario SERVER con el id: ${socket.id}`);

  io.sockets.emit("mensajes", [...mensajitos]);
  console.log("NMIS MSJ --->", mensajitos);
  io.sockets.emit("products", [...productitos]);
  socket.on("msj", (data) => {
    mensage.save(data);
  });

  socket.on("product", (data) => {
    producto.save(data);
  });
});

httpServer.listen(PORT, () =>
  console.log(`SERVER ON http://localhost:${PORT}`)
);
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
