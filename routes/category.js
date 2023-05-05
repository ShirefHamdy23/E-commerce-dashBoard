const express = require("express");
const db = require('../DB/dbConnection');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const { log } = require('console');
const categoryRouter = express.Router();//focus



categoryRouter.get('/readSpecificRow', async (req, res, next) => {//read
    var categoryID = req.body.id //here
    //here
    await db.query('SELECT * FROM category WHERE categoryID = ?' , [categoryID], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            //here
            const sqlInsert = "SELECT * FROM category where categoryID = ?"
            //here
            const insert_query = mysql.format(sqlInsert, categoryID)
            await db.query(insert_query, (error, results, fields) => {
                keys.forEach(function (key) {
                    var result = results[key];
                    //here
                    console.log("Category Name : " + result.name + "\nCategory Title : " + result.title + "\nCategory Description : " + result.description)
                });
                //here
                res.send('Category Exist');
            });
        } else {
            //here
            res.send("Category Not Exist !!");
        }
    });
})

//don't forget to export
module.exports = categoryRouter;