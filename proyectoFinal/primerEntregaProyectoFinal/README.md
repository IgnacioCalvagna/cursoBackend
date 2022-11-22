


## Proyecto Final 
Coder House - Desarrollo Backend - curso 43495

Alumno : Ignacio Calvagna 
    

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
      <td><a href="http://localhost:8080/api/carts/" target="_blank"/>Get carts</td>
      <td>Devuelve todos los carritos</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/carts/1" target="_blank"/>Get cart by id</td>
      <td>Devuelve un carrito segun el id</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td style="color:green">Get</td>
      <td><a href="http://localhost:8080/api/carts/:id/products" target="_blank"/>Get product from cart</td>
      <td>Agrega a un carrito especifico un producto </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td style="color:green">Post</td>
      <td><a href="http://localhost:8080/api/carts/" target="_blank"/>Add product in cart</td>
      <td>Agreg un producto segun su id, <strong>testear en Postman</strong> </td>
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

4) createCart ==POST==> http://localhost:8080/api/carts/
5) addProductToCart ==POST==> http://localhost:8080/api/carts/1/products
6) cleanCart ==DELETE==> http://localhost:8080/api/carts/:id
7) removeProductFromCart ==DELETE==> http://localhost:8080/api/carts/:id_cart/products/:id_prod
