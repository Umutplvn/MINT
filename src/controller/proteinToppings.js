"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/


const ProteinTopping=require('../model/proteinToppings')

module.exports={
   
    list: async(req, res)=> {
        const data=await ProteinTopping.find()

        res.send({
            error:false,
            result:data
        })
    },

    create: async(req, res)=> {
        const data=await ProteinTopping.create(req.body)

        res.send({
            error:false,
            result:data
        })

    },

    read: async(req, res)=> {
        const data = await ProteinTopping.findOne({_id:req.params.proteinToppingId})

        res.send({
            error:false,
            result:data
        })
    },

    update: async(req, res)=> {
        const data=await ProteinTopping.updateOne({_id:req.params.proteinToppingId}, req.body, {runValidators:true})

        res.send({
            error:false,
            result:data,
            newData: await ProteinTopping.findOne({ _id: req.params.proteinToppingId }),
        })
    },

    delete: async(req, res)=> {
        const data= await ProteinTopping.deleteOne({_id:req.params.proteinToppingId})

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