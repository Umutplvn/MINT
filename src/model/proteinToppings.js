"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const mongoose=require('mongoose')

const ProteinTopping= new mongoose.Schema({

    proteinTopping:{
        type:String,
        trim:true,
        required:true
        // enum:[' Salmon', "Chicken Breast", "8 Oz Steak", "10 Oz Steak", "12 Oz Steak"]
    },

    proteinPrice:{
        type:String,
        trim:true,
        required:true
    }

},  
{collection:'proteinTopping', timestamps:true})



module.exports=mongoose.model('ProteinTopping', ProteinTopping)