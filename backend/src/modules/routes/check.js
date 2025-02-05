import express from "express"
// import {  } from "../controller/check.js"


const router = express.Router()


router.get("/", (req,res)=>{
    res.send("hello")
})




export default router   