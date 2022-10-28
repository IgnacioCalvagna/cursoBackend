const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const router = require("./routes");
const morgan = require("morgan");
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.use("/api", router);

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT} ✅`);
})
