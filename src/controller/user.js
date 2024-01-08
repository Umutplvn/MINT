"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/


const User=require('../model/user')

module.exports={
   
    list: async(req, res)=> {
        const data=await User.find()

        res.send({
            error:false,
            result:data
        })
    },

    create: async(req, res)=> {
        const data=await User.create(req.body)
        req.body.isAdmin = false
        res.send({
            error:false,
            result:data
        })

    },

    read: async(req, res)=> {
        const data = await User.findOne({_id:req.params.userId})

        res.send({
            error:false,
            result:data
        })
    },

    update: async(req, res)=> {
        const data=await User.updateOne({_id:req.params.userId}, req.body, {runValidators:true})
        req.body.isAdmin = (req.user?.isAdmin) ? req.body.isAdmin : false

        res.send({
            error:false,
            result:data,
            newData: await User.findOne({ _id: req.params.userId }),
        })
    },

    delete: async(req, res)=> {
        const data= await User.deleteOne({_id:req.params.userId})

          if (data.deletedCount >= 1) {
      res.send({
        message: "Successfully deleted",
      });
    } else {
      res.send({
        message: "There is no recording to be deleted.",
      });
    }
    }
}