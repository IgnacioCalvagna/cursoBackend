const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const router = require("./routes")


app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.use(morgan("dev"));


app.use("/api", router)


app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT} ✅`)
})