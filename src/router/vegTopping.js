"use strict";

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const router = require("express").Router();
const VegTopping = require("../controller/vegTopping");

router.route("/vegtoppings")
    .get(VegTopping.list)
    .post(VegTopping.create);

router
  .route("/vegtoppings/:vegToppingId")
  .get(VegTopping.read)
  .put(VegTopping.update)
  .delete(VegTopping.delete);

module.exports = router;
