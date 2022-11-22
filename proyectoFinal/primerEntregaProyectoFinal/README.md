


<h1>Proyecto Final </h1>
    <h2>Coder House - Desarrollo Backend</h2>

# Testear con Swagger 
http://localhost:8080/api-doc

## Rutas de PRODUCTOS 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Verb</th>
      <th scope="col">path</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/products" target="_blank"/>Get products</td>
      <td>Devuelve todos los productos</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/products/3" target="_blank"/>Get product by id</td>
      <td>Devuelve un producto segun el id</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td style="color:green">Post</td>
      <td><a href="http://localhost:8080/api/products" target="_blank"/>Add product</td>
      <td>Devuelve todos los productos <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td style="color:green">Put</td>
      <td><a href="http://localhost:8080/api/products/3" target="_blank"/>Edit product</td>
      <td>Edita un producto segun su id, <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td style="color:green">Delete</td>
      <td><a href="http://localhost:8080/api/products/:id" target="_blank"/>Remove product</td>
      <td>Elimina un producto por id <strong>testear en Postman</strong>  </td>
     </tr>
  </tbody>
</table>

## Rutas de CARRITO 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Verb</th>
      <th scope="col">path</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/products" target="_blank"/>Get products</td>
      <td>Devuelve todos los productos</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/products/3" target="_blank"/>Get product by id</td>
      <td>Devuelve un producto segun el id</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td style="color:green">Post</td>
      <td><a href="http://localhost:8080/api/products" target="_blank"/>Add product</td>
      <td>Devuelve todos los productos <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td style="color:green">Put</td>
      <td><a href="http://localhost:8080/api/products/3" target="_blank"/>Edit product</td>
      <td>Edita un producto segun su id, <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td style="color:green">Delete</td>
      <td><a href="http://localhost:8080/api/products/:id" target="_blank"/>Remove product</td>
      <td>Elimina un producto por id <strong>testear en Postman</strong>  </td>
     </tr>
      <tr>
      <th scope="row">5</th>
      <td style="color:green">Delete</td>
      <td><a href="http://localhost:8080/api/products/:id" target="_blank"/>Remove product</td>
      <td>Elimina un producto por id <strong>testear en Postman</strong>  </td>
     </tr>
       <tr>
      <th scope="row">5</th>
      <td style="color:green">Delete</td>
      <td><a href="http://localhost:8080/api/products/:id" target="_blank"/>Remove product</td>
      <td>Elimina un producto por id <strong>testear en Postman</strong>  </td>
     </tr>
  </tbody>
</table>

1) getAllCarts ==GET==> http://localhost:8080/api/carts/
2) getCartById ==GET==> http://localhost:8080/api/carts/:id
3) getProductsInCart ==GET==> http://localhost:8080/api/carts/:id/products
4) createCart ==POST==> http://localhost:8080/api/carts/
5) addProductToCart ==POST==> http://localhost:8080/api/carts/1/products
6) cleanCart ==DELETE==> http://localhost:8080/api/carts/:id
7) removeProductFromCart ==DELETE==> http://localhost:8080/api/carts/:id_cart/products/:id_prod
