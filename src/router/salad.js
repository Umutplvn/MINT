"use strict";

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const router = require("express").Router();
const Salad = require("../controller/salad");

router.route("/salads")
    .get(Salad.list)
    .post(Salad.create);

router
  .route("/salads/:saladId")
  .get(Salad.read)
  .put(Salad.update)
  .delete(Salad.delete);

module.exports = router;
