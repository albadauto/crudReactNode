const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require("./routes/main.route");
const cors = require("cors")
app.use(express.json());

app.use(cors());

app.use('/', userRoute);

mongoose.connect("mongodb://localhost/EDSD", () => console.log("Banco de dados conectado"))

app.listen(8080, () => { 
  console.log("API Rodando")
})