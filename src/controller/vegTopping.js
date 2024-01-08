"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/


const VegTopping=require('../model/vegTopping')

module.exports={
   
    list: async(req, res)=> {
        const data=await VegTopping.find()

        res.send({
            error:false,
            result:data
        })
    },

    create: async(req, res)=> {
        const data=await VegTopping.create(req.body)

        res.send({
            error:false,
            result:data
        })

    },

    read: async(req, res)=> {
        const data = await VegTopping.findOne({_id:req.params.vegToppingId})

        res.send({
            error:false,
            result:data
        })
    },

    update: async(req, res)=> {
        const data=await VegTopping.updateOne({_id:req.params.vegToppingId}, req.body, {runValidators:true})

        res.send({
            error:false,
            result:data,
            newData: await VegTopping.findOne({ _id: req.params.vegToppingId }),
        })
    },

    delete: async(req, res)=> {
        const data= await VegTopping.deleteOne({_id:req.params.vegToppingId})

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