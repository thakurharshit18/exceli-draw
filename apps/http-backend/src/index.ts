import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
const app = express();

app.get('/',(req,res)=>{
    res.json({message:"Harshit Chauhan"});
})


app.post('/signin',(req,res)=>{
const userId = 1;
jwt.sign({
    userId
},JWT_SECRET);
})

app.post('/signup',(req,res)=>{

})

app.post('/room',middleware,(req,res)=>{

})

app.listen(3005);  