const express = require('express');
const db = require('../DB/dbConnection');

const { Result } = require('express-validator');
const {connection} = require('../DB/dbConnection');
const router = express.Router();

router.post('/signup',async(req,res,next)=>{
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlCheck = ' select Email from user where Email = "x" '
    console.log(sqlCheck);
    // let sqlINsert = "INSERT INTO `user` (`id`,`Email`, `firstName`, `lastName`, `password`, `phone`, `status`, `type`, `orderID`) VALUES ( 10,'xz', 'xz', 'xz', 'xz', '12454', 'active', 'user', NULL)"
    db.query(sqlCheck,(req,res,fields)=>{
        console.log(res[0].Email);
    });
    db.end();
})
module.exports = router;