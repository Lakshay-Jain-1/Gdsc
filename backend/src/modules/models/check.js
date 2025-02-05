import mongoose from "mongoose";

// in this we will create a schema  

const checkSchema = new mongoose.Schema({
    id:Number,

})


export const checkModel = mongoose.model("check",checkSchema)