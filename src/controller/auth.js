"use strict"
/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const Token= require('../model/Token')
const User= require('../model/user')
const passwordEncrypt= require('../helpers/passwordEncrypt')

module.exports={

    login:async(req,res)=>{

        const {password, email}=req.body

        if(password, email){

            const user= await User.findOne({password:password, email:email})

            if(user){
            const tokenData= "Token "+ (passwordEncrypt(user._id+`${new Date()}`))
            await Token.create({userId:user._id, token:tokenData})

                res.send({
                    error:false,
                    message:"Login successful",
                    Token:tokenData
                })
            }else{
                res.send({
                    message:"Wrong email or password."
                })
            }

        }else{
            res.send({
                message:"Please enter a valid email and password to login."
            })
        }

    },

    logout:async(req, res)=>{
        const token= req.headers.authorization || null
        let message=""
        if(token){
            await Token.deleteOne({token:token})
            
            message="Logout successful."
            
        }else{
            message="Logut failed."
        }

        res.send({
            error:false,
            message:message
        })
    }

}