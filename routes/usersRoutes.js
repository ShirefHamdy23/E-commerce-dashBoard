const express = require('express');
const db = require('../DB/dbConnection');
const { Result } = require('express-validator');
const {connection} = require('../DB/dbConnection');
const router = express.Router();

router.post('/signup',async(req,res,next)=>{
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlCheck = ` select Email from user where Email = ${res[0]} `
    db.query(sqlCheck,(req,res,fields)=>{
        console.log(res[0].Email);
    });
    if (sqlCheck == res[0]){
        console.log('user already exist');
    }else{
        let sqlINsert = "INSERT INTO `user` (`email`, `firstName`, `lastName`, `password`,`phone`,`type`, `status`) VALUES (`${res[0]}`, `res[1]`, `res[2]`, `res[3]`, `res[4]`, 'active', 'user')"
        db.query(sqlINsert,(req,res,fields)=>{
            console.log('user added');
        });
    }
    console.log(db.state());
    db.end();
})
module.exports = router;