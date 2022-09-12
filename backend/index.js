const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hi");
})

const PORT = 8080 || process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is running on PORT: "+PORT);
})