const socket = io();

socket.on("connect", () => {
  console.log(`New user ${socket.id} BROWSER `);
  //*  con esta linea mando mensajes desde el front
  // socket.emit("msj", "Hola server desde socket.io");
});

//*                                       Mensajesss

socket.on("msj", (data) => {
  socket.emit("msj", data);
});

socket.on("mensajes", (data) => {
  let html = "";
  data.forEach((obj) => {
    html += `
    <div  data-spy="scroll" data-target="#navbar-example2" data-offset="0">
    
      <p class="parrafo" style="border-radius: 3px solid red;">
        <b class="email" style="color:blue">${obj.user}</b>:
        <i class="mensaje" style="color:green"> ${obj.msj}</i>

        <sub class="fecha" style="color:brown">[${obj.fecha}]</sub>
      </p>
      
    </div>
    `;
  });
  document.getElementById("msj-box").innerHTML = html;
});





//*                                       PRODUCTOSSS
socket.on("products", (data) => {
  console.log("data", data)
  let html2 = "";
  data.forEach((obj) => {
    html2 += `
    <tr >
     
      <td>${obj.id} </td>
      <td>${obj.title} </td>
      <td>${obj.price}</td>
      <td>${obj.stock}</td>
      <td>${obj.codigo}</td>
      <td> <img class="laImg"src='${obj.img}' alt="${obj.title}"></td>

    </tr>
    `;
  });
  document.getElementById("product-box").innerHTML = html2;
});

socket.on("product", (data) => {
  socket.emit("product", data);
});





function addProduct() {
  const title = document.getElementById("send-product");
  const price = document.getElementById("send-price");
  const stock = document.getElementById("send-stock");
  const codigo = document.getElementById("send-codigo");
  const img = document.getElementById("send-img");

  const newProduct = {
    title: title.value,
    price: price.value,
    stock: stock.value,
    codigo: codigo.value,
    img: img.value,
    // date:Date.now()
  };
  socket.emit("product", newProduct);
}

function enviarMensaje() {
  const userCapturado = document.getElementById("send-user");
  const msjCapturado = document.getElementById("send-msj");

  const MsjSend = { user: userCapturado.value, msj: msjCapturado.value };
  socket.emit("msj", MsjSend);
}
