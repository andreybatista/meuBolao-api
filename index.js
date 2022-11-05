const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.listen(port);

app.get("/", (req,res)=> {
  res.send("Pagina inicial")
})

console.log(`Listen on Port ${port}`)