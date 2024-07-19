import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from './routes/myUserRoute'

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("connected to database"));

const app = express();

app.use(express.json());   //adding middleware

app.use(cors());

app.get("/health",async (req:Request,res:Response)=>{
    res.send({message :"health ok "})
});

app.use("/api/my/user",myUserRoute);

app.listen(7000,()=>{
    console.log("server is started on localhost:7000")
});