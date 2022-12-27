const config ={

    mongo:{
        url:`mongodb+srv://ignacioCalvagna:${process.env.MONGO_DB_PASSWORD}@satindiback.perxk.mongodb.net/?retryWrites=true&w=majority`,
        dbName:process.env.MONGO_DB_NAME
    },

}