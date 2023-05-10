const express = require("express");
const mysql = require("mysql");
const db = require("../DB/dbConnection");
const verify = require('../middleware/verify.js');
const { Result } = require("express-validator");
const {jwtSecret} = require("../config");
const jwt = require("jsonwebtoken");
//const signJwt = promisify(jwt.sign);
const router = express.Router();

router.post('/signup', async (req, res, next) => {
    console.log("Hello From DB");
    var email = req.body.email
    await db.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len == 0) { 
            const sqlInsert = "INSERT INTO users(firstName, lastName, email, password, phone, type, status)VALUES (?,?,?,?,?,'user','active')"
            const insert_query = mysql.format(sqlInsert, [req.body.firstName,req.body.lastName,req.body.email,req.body.password,req.body.phone])
            console.log(insert_query);
            await db.query(insert_query,(error, results, fields) => {
                res.send('user added');
            });
        } else {
            res.send("Email Already Exist !!");
        }
    });
    console.log('it works');
})

router.post('/signIn', async (request, response, next) => {
    var email = request.body.email;
    var password = request.body.password;

    if (email && password) {
        await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], async(error, results, fields) => {
            var keys = Object.keys(results);
            var len = keys.length;
            console.log(results);
            if (len != 0) {
                emailFromQuery = results[0]["email"];
                type = results[0]["type"];
                if (emailFromQuery == email) {
                    console.log('email correct');
                    if (results[0]["password"] == password) {
                        //response.redirect('/home')
                        response.json({
                            message: "logged in",
                            email,
                            type
                        });
                    } else {
                        response.send('password incorrect');
                    }
                } else {
                    response.send('Incorrect Email or password!');
                }
            } else {
                response.send('incorrect data')
            }
        });
    } else {
        response.send('Please enter email and/or Password!');
    }
    
});
module.exports = router;
