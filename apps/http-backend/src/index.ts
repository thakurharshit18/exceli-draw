import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
const app = express();

app.get('/',(req,res)=>{
    res.json({message:"Harshit Chauhan"});
})


app.post('/signin',(req,res)=>{
const userId = 1;
jwt.sign({
    userId
},process.env.JWT_SECRET as string);
})

app.post('/signup',(req,res)=>{

})

app.post('/room',middleware,(req,res)=>{

})

app.listen(3005);  