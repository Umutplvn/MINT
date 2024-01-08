"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/



const mongoose=require('mongoose')
const saladSchema= new mongoose.Schema({

    saladType:{
        type:String,
        trim: true,
        required:true
    },

    image: {
        type: String,
        trim: true,
        required:true
    },

    price: {
        type: Number,
        required: true,
    },

    vegToppings: [ // push, pull
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VegTopping',
            required: true
            // 659b38b28f94444eebf42cdc
            // 659b38d38f94444eebf42ce2
        }
    ],

    proteinToppings: [ // push, pull
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProteinTopping',
            required: true
            // 659b39f4e124fb2e387467ea
            // 659b39e2e124fb2e387467e4
        }
    ],

    

},  
{collection:'saladTypes', timestamps:true})



module.exports=mongoose.model('SaladTypes', saladSchema)