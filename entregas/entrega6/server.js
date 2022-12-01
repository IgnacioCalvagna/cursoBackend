//https://socket.io/docs/v4/server-initialization/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const Contenedor = require("./Contenedor");
const losProductos = new Contenedor("./productos.json");
const losMensajes = new Contenedor("./mensajes.json");
//IMPLEMENTACION
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);


io.on("connection", async (socket) => {
  const mensajitos = await losMensajes.getAll();
  const productitos = await losProductos.getAll();
  console.log(`se conecto un usuario SERVER con el id: ${socket.id}`);
  let fecha = new Date();
  
  io.sockets.emit("mensajes", [...mensajitos]);
  io.sockets.emit("products",[...productitos]);

  socket.on("msj", (data) => {
    losMensajes.save({ data: data, fecha });
  });
  socket.on("product", (data) => {
    losProductos.save({ data: data,fecha });
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
