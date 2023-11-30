const express = requires ("express");
const router = express.Router();



router.get("/", (req,res,next)=>{
    res.json("hrllo");
})