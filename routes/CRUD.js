const express = require('express');
const db = require('../DB/dbConnection');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const crudRouter = express.Router();

crudRouter.get('/', async (req, res, next) => {//read
    console.log("Hello From DB");
    res.send('hello from response');
    let sqlQuery = "SELECT * FROM 'products'";
    await db.query(sqlQuery, (errors, results, fields) => {
        console.log(results);
    });
})

crudRouter.post('/', async (req, res, next) => {//create
    var name = req.body.name
    await db.query('SELECT * FROM products WHERE name = ?', [name], async function(error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len == 0) { 
            const sqlInsert = "INSERT INTO products(name, price, description,categoryID)VALUES (?,?,?,?)"
            const insert_query = mysql.format(sqlInsert, [req.body.name,req.body.price,req.body.description,req.body.categoryID])
            console.log(insert_query);
            await db.query(insert_query,(error, results, fields) => {
                res.send('product added');
            });
        } else {
            res.send("product Already Exist !!");
        }
    });
})
crudRouter.delete('/', async (req, res, next) => {//create
    var name = req.body.name
    await db.query('SELECT * FROM products WHERE name = ?', [name], async function(error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) { 
            const sqlInsert = "DELETE FROM products WHERE name = ?"
            const insert_query = mysql.format(sqlInsert, [req.body.name])
            console.log(insert_query);
            await db.query(insert_query,(error, results, fields) => {
                res.send('product Deleted');
            });
        } else {
            res.send("product Not Exist !!");
        }
    });
})
// crudRouter.put('/', async (req, res, next) => {//update
//     var name = req.body.name
//     await db.query('SELECT * FROM products WHERE name = ?', [name], async function(error, results, fields) {
//         var keys = Object.keys(results);
//         var len = keys.length;
//         if (len == 0) { 
//         const sqlInsert = '';
//             //sqlInsert = "INSERT INTO products(name, price, description,categoryID)VALUES (?,?,?,?)"
//         const insert_query = mysql.format(sqlInsert, [req.body.name,])
//             await db.query(insert_query,(error, results, fields) => {
//                 res.send('product added');
//             });
//         } else {
//             res.send("product Not Exists !!");
//         }
//     });
// })


module.exports = crudRouter;