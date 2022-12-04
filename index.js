import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bookRoutes from './routes/books.js'

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('APP IS RUNNING......')
  })
  app.use("/books", bookRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
}) 
  