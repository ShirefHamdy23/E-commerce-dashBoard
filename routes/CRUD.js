const express = require('express');
const db = require('../DB/dbConnection');
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const crudRouter = express.Router();

crudRouter.post('/read', async (req, res, next) => {
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlQuery = ` select email from users where email = ${req[0]} `;
    db.query(sqlQuery, (req, res, fields) => {
        console.log(res[0])
    });
    db.end();
})
module.exports = crudRouter;