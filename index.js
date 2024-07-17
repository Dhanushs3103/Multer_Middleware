//packages - external modules
import express from "express";
import multer from "multer";

let app = express();
let PORT = 3001;

app.get('/',(req,res)=>{
    res.send("Welcome the server")
})

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})