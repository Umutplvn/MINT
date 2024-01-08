"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/



const mongoose=require('mongoose')

const TokenModel=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.String,
        ref:"User",
        trim:true
    },

    token:{
        type:String,
        trim:true
    }

},{collection:"Token", timestamps:true})

module.exports=mongoose.model("Token", TokenModel)