const express = require("express")
const app = express()

const db = require('../api/db');

app.listen(8800, function(){
    console.log("Servidor Ativo!")
});