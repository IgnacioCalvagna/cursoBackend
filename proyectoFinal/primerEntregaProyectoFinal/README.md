


<h1>Proyecto Final </h1>
    <h2>Coder House - Desarrollo Backend</h2>




## Rutas de PRODUCTOS 

1) getAllProducts ==GET==> http://localhost:8080/api/products
2) getProductById ==GET==> http://localhost:8080/api/products/:id
3) addProducts ==POST==> http://localhost:8080/api/products
4) editProducts ==PUT==> http://localhost:8080/api/products
5) deleteProductById ==DELETE==> http://localhost:8080/api/products/:id

## Rutas de CARRITO 

1) getAllCarts ==GET==> http://localhost:8080/api/carts/
2) getCartById ==GET==> http://localhost:8080/api/carts/:id
3) getProductsInCart ==GET==> http://localhost:8080/api/carts/:id/products
4) createCart ==POST==> http://localhost:8080/api/carts/
5) addProductToCart ==POST==> http://localhost:8080/api/carts/1/products
6) cleanCart ==DELETE==> http://localhost:8080/api/carts/:id
7) removeProductFromCart ==DELETE==> http://localhost:8080/api/carts/:id_cart/products/:id_prod