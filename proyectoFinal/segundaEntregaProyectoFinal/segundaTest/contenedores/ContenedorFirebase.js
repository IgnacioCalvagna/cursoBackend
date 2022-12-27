const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../privi.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

console.log("conectado....");

let id = 1;
class ContenedorFirebase {
  constructor(nombreColeccion) {
    this.coleccion = nombreColeccion;
  }
  async save(object) {
    const newObj = { miId, ...object, date: new Date() };

    try {
      await db.collection(this.coleccion).doc().set(newObj);
      miId++;
      return `se ha añadido con exito a la colleccion ${this.coleccion}`;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getAll() {
    const collectionRef = db.collection(this.coleccion);
    try {
      const snapshot = await collectionRef.get();

      const result = snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });

      return result;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getById(id) {
    const documentRef = db.collection(this.coleccion).doc(id);
    const doc = await documentRef.get();

    return !doc.exists ? console.log(`el documento no existe `) : doc.data();
  }

  async update(id, title, price, codigo, stock, img) {
    const docRef = db.collection("cities").doc(id);


    const res = await docRef.update(title, price, codigo, stock, img);

    return res;
  }
  async deleteById(id) {
    try {
      const res = await db.collection(this.coleccion).doc(id).delete();
    } catch (e) {
      console.log(e);
    }
  }
  
}

module.exports = ContenedorFirebase;
