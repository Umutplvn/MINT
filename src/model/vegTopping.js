"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const mongoose=require('mongoose')
const vegTopping= new mongoose.Schema({

    vegTopping:{
        type:String,
        trim:true,
        required:true

    },

    vegPrice:{
        type:String,
        required:true
    }
},  
{collection:'vegTopping', timestamps:true})



module.exports=mongoose.model('VegTopping', vegTopping)

// ['Nuts and Seeds', "Dried Fruit", "Whole Grains", "Beans and Legumes", "Fresh Fruit", "Shredded Hard Cheeses", "Tabbouleh", "Avocados", "Soft Cheeses", "Pomegranate Arils", "Corn and Salsa"]