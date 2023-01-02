const {Schema, model} = require('mongoose')

const messageSchema = new Schema({
    author:{
        nombre:{type: String, required: true},
        apellido:{type: String, required: true},
        edad:{type:Number,required: true},
        username:{type: String, required: true}
    },
    text:{type: String, required: true},
    timestamp: { date: { type: Date, default: Date.now }},
    
})


const Message = model("mensajes", messageSchema)






module.exports=Message