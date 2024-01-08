"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*

! Data
{
    "firstname": "Deneme",
    "lastname": "Deneme",
    "username":"Deneme",
    "email":"deneme@gmail.com",
    "password":"1234"

}

/* ---------------------------------------------*/

const mongoose=require('mongoose')
const passwordEncrypt=require('../helpers/passwordEncrypt')
const userSchema= new mongoose.Schema({

    firstname:{
        type:String,
        trim:true,
        required:true
    },

    lastname:{
        type:String,
        trim:true,
        required:true
    },
    username:{
        type:String,
        trim:true,
        required:true,
        unique: true,

    },

    email:{
        type:String,
        trim:true,
        required:true,
        unique: true,
        required: [true, 'Email field must be required.'],
        validate: [
            (email) => (email.includes('@') && email.includes('.')), // ValidationCheck
            'Email type is incorrect.' // If false Message.
        ]
    },

    password:{
        type:String,
        trim:true,
        required:true,
        set: (password)=> passwordEncrypt(password)
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

},  
{collection:'User', timestamps:true})



module.exports=mongoose.model('User', userSchema)