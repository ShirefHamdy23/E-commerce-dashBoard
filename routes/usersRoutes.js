const express = require('express');
const db = require('../DB/dbConnection');
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const router = express.Router();


router.post('/signup', async (req, res, next) => {
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlCheck = ` select email from users where email = ${req[0]} `;
    db.query(sqlCheck, (req, res, fields) => {
        sqlResult = res[0];
    });
    if (sqlResult == req[0]) {
        res.send('user already exist');
    } else {
        let sqlINsert = "INSERT INTO `users` (`email`, `firstName`, `lastName`, `password`,`phone`,`type`, `status`) VALUES (`${res[0]}`, `res[1]`, `res[2]`, `res[3]`, `res[4]`, 'active', 'user')"
        db.query(sqlINsert, (req, res, fields) => {
            res.send('user added');
        });
    }
    console.log('it works');
    db.end();
})
router.post('/signIn', async (req, res, next) => {
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlCheck = ` select email from users where email = ${req[0]} `;
    db.query(sqlCheck, (req, res, fields) => {
        sqlResult = res[0];
    });
    if (sqlResult == req[0]) {
        sqlCheck = ` select password from users where password = ${req[1]} `;
        db.query(sqlCheck, (req, res, fields) => {
            sqlResult = res[1];
        });
        if (sqlResult != req[1]) {
            'incorrect password'
        } else {
            'logged in successfully';
        }
    } else {
        res.send('incorrect email or password');
    }
    console.log('it works');
    db.end();
})
module.exports = router;