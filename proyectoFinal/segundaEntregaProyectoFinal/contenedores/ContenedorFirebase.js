const admin = require("firebase-admin");

const serviceAccount = require("../privi.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


let id = 1
class ContenedorFirebase {
  constructor(nombreColeccion) {
    this.coleccion = db.collection(nombreColeccion);
    
  }

  async save(object) {

    try {
      const newObj = { id, ...object,puto:"elquelee", date: new Date().toLocaleDateString() };


      await doc.create(newObj);
      id ++;
      return newObj;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getAll() {
    try {
      const querySnapshot = await this.coleccion.get();
      console.log(querySnapshot.docs);
      return querySnapshot.docs;
    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = ContenedorFirebase;
