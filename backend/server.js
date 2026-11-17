import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/StudentRoute.js";
import ProductRouter from "./routes/ProductRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));
app.use("/api",studentRoutes);
app.use("/api",ProductRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to my Server")
})

mongoose.connect("mongodb://localhost:27017/db03G")
.then(()=>{
    console.log("Mongodb Connected")
})
.catch((error)=>{
    console.log("Connection Failed",error)
})

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000")
})

