"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/


const Salad=require('../model/salad')
const User=require('../model/user')

module.exports={
   
    list: async(req, res)=> {
        const data=await Salad.find().populate('vegToppings').populate('proteinToppings')
        res.send({
            error:false,
            result:data
        })

        const user=User.findOne({_id:req.user})

    },

    create: async(req, res)=> {
        const data=await Salad.create(req.body)

        res.send({
            error:false,
            result:data
        })

    },

    read: async(req, res)=> {
        const data = await Salad.findOne({_id:req.params.saladId}).populate('vegToppings').populate('proteinToppings')

        res.send({
            error:false,
            result:data
        })
    },

    update: async(req, res)=> {
        const data=await Salad.updateOne({_id:req.params.saladId}, req.body, {runValidators:true})

        res.send({
            error:false,
            result:data,
            newData: await Salad.findOne({ _id: req.params.saladId }),
        })
    },

    delete: async(req, res)=> {
        const data= await Salad.deleteOne({_id:req.params.saladId})

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