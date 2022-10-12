//* Primer entrega curso backend -------->

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName = () => `${this.nombre} ${this.apellido}`;
  addMascotas = (mascota) => this.mascotas.push(mascota);
  countMascotas = () => this.mascotas.length;
  addLibros = (libro) => this.libros.push(libro);
  getBookName = () => this.libros.map((libro) => libro.libro);


}

const user1 = new Usuario("Ignacio", "Calvagna");

user1.addMascotas("Mia");
user1.addMascotas("Jack");
user1.addLibros({ libro: "Rayuela", autor: "Cortazar" });
user1.addLibros({ libro: "Martin fierro", autor: "Jose Hernandez" });

console.log(`${user1.getFullName()} tiene ${user1.countMascotas()}`);
console.log(user1.getBookName());
