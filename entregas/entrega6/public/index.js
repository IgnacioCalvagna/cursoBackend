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
        <b class="email" style="color:blue">${obj.data.user}</b>:
        <i class="mensaje" style="color:green"> ${obj.data.msj}</i>

        <sub class="fecha" style="color:brown">[${obj.fecha}]</sub>
      </p>
      
    </div>
    `;
  });
  document.getElementById("msj-box").innerHTML = html;
});





//*                                       PRODUCTOSSS
socket.on("products", (data) => {
  let html2 = "";
  data.forEach((obj) => {
    html2 += `
    <tr >
     
      <td>${obj.id} </td>
      <td>${obj.data.product} </td>
      <td>${obj.data.price}</td>
      <td>${obj.data.quantity}</td>
      <td> <img class="laImg"src='${obj.data.img}' alt="${obj.data.product}"></td>

    </tr>
    `;
  });
  document.getElementById("product-box").innerHTML = html2;
});

socket.on("product", (data) => {
  socket.emit("product", data);
});





function addProduct() {
  const product = document.getElementById("send-product");
  const price = document.getElementById("send-price");
  const quantity = document.getElementById("send-quantity");
  const img = document.getElementById("send-img");

  const newProduct = {
    product: product.value,
    price: price.value,
    quantity: quantity.value,
    img: img.value,
  };
  socket.emit("product", newProduct);
}

function enviarMensaje() {
  const userCapturado = document.getElementById("send-user");
  const msjCapturado = document.getElementById("send-msj");

  const MsjSend = { user: userCapturado.value, msj: msjCapturado.value };
  socket.emit("msj", MsjSend);
}
