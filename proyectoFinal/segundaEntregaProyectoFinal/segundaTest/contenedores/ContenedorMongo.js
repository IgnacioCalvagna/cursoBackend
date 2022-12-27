class ContenedorMongo {
  constructor(collection ) {
    this.model =collection
  }


  async save(object) {
    try {
      const newElement = await this.model.create(object);
      return newElement;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getAll() {
    try {
      const allElements = await this.model.find();
      return allElements;
    } catch (e) {
      return e.message;
    }
  }
  async getById(id) {
    try {
      const element = this.model.find({_id:id})
      return element;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteById(id) {
    try {
     await this.model.remove({_id:id})
      return `Delete one success`;
    } catch (e) {
      console.log(e);
    }
  }

  async update(id,title, price, codigo,stock, img) {
    try{
      const producto = await this.model.findAndUpdate({_id:id},{$set: {title:title, price:price, codigo:codigo,stock:stock, img:img}})
      console.log(producto);
      return producto;
    }catch(e){
      console.log(e)
    }
    
    
  }
  



}

module.exports = ContenedorMongo;
