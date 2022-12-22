const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const router = require("./routes");

//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const {swaggerConfig} = require("./config/swaggerConfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.use(
//   "/api-doc",
//   swaggerUI.serve,
//   swaggerUI.setup(swaggerJsDoc(swaggerConfig))
// );
app.use("/api", router);

app.use("/", (req, res)=>{
    res.send("hello api ")
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} ✅`);
});
