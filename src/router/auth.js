"use strict";

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

const router=require('express').Router()
const Auth=require('../controller/auth')


router.post('/login', Auth.login)
router.get('/logout', Auth.logout)
router.post('/logout', Auth.logout)

module.exports=router