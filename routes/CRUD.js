const express = require('express');
const db = require('../DB/dbConnection');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const crudRouter = express.Router();


crudRouter.get('/readSpecificRow', async (req, res, next) => {//read
    var name = req.body.name
    await db.query('SELECT * FROM products WHERE name = ?', [name], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "SELECT * FROM products where name = ?"
            const insert_query = mysql.format(sqlInsert, name)
            await db.query(insert_query, (error, results, fields) => {
                keys.forEach(function(key) {
                    var result = results[key];      
                    console.log("Product Name : " + result.name + "\nProduct Price : "+result.price+"\nProduct Description : "+ result.description)  
            });
                res.send('Product Exist');
            });
        } else {
            res.send("product Not Exist !!");
        }
    });
})
crudRouter.get('/', async (req, res, next) => {//read
    var name = req.body.name
    await db.query('SELECT * FROM products', async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
                keys.forEach(function(key) {
                    var result = results[key];      
                    console.log("Product Name : " + result.name + "\nProduct Price : "+result.price+"\nProduct Description : "+ result.description +"\n")  
            });
            res.send('check terminal');
    });
})









crudRouter.post('/', async (req, res, next) => {//create
    var name = req.body.name
    await db.query('SELECT * FROM products WHERE name = ?', [name], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len == 0) {
            const sqlInsert = "INSERT INTO products(name, price, description,categoryID)VALUES (?,?,?,?)"
            const insert_query = mysql.format(sqlInsert, [req.body.name, req.body.price, req.body.description, req.body.categoryID])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
                res.send('product added');
            });
        } else {
            res.send("product Already Exist !!");
        }
    });
})
crudRouter.delete('/', async (req, res, next) => {//delete
    var name = req.body.name
    await db.query('SELECT * FROM products WHERE name = ?', [name], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "DELETE FROM products WHERE name = ?"
            const insert_query = mysql.format(sqlInsert, [req.body.name])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
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