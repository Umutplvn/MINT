"use strict";

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const router = require("express").Router();
const ProteinTopping = require("../controller/proteinToppings");

router.route("/proteintoppings")
    .get(ProteinTopping.list)
    .post(ProteinTopping.create);

router
  .route("/proteintoppings/:proteinToppingId")
  .get(ProteinTopping.read)
  .put(ProteinTopping.update)
  .delete(ProteinTopping.delete);

module.exports = router;
