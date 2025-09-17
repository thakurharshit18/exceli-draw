import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import {createUserSchema} from "@repo/common/types";
import { SigninSchema,CreateRoomSchema } from "@repo/common/types";
const app = express();


app.post('/signin',(req,res)=>{
       const data =SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        })
        return;
    }
const userId = 1;
jwt.sign({
    userId
},JWT_SECRET);
})

app.post('/signup',(req,res)=>{
   const data =createUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        })
        return;
    }
})

app.post('/room',middleware,(req,res)=>{
   const data =CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        })
        return;
    }

})

app.listen(3005);  