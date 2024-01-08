"use strict";

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const router = require("express").Router();
const User = require("../controller/user");

router.route("/users")
    .get(User.list)
    .post(User.create);

router
  .route("/users/:userId")
  .get(User.read)
  .put(User.update)
  .delete(User.delete);

module.exports = router;
