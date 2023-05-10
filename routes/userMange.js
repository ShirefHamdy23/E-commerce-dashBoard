const express = require('express');
const db = require('../DB/dbConnection');
const verify = require('../middleware/verify.js');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const { log } = require('console');
const fs = require('fs');
const crudRouter = express.Router(); //new like this
const { Table } = require('./Table');

class users extends Table {
    constructor(connection) {
        super(connection, "users");
        this.users = users;
    }
}
//edit like this
crudRouter.get('/readSpecificRow' , async (req, res, next) => {//read
    var email = req.body.email
    await db.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "SELECT * FROM users where email = ?"
            const insert_query = mysql.format(sqlInsert, email)
            await db.query(insert_query, (error, results, fields) => {
                var data;
                keys.forEach(function (key) {
                    var result = results[key];
                    data = ("First Name : " + result.firstName + "\nLast Name : " + result.lastName + "\nEmail: "+result.email+"\npassword: "+result.password+ "\nphone: "+result.phone+ "\ntype: "+result.type+ "\nstatus: "+result.status)
                    console.log(data);
                });
                res.send(data);
            });
        } else {
            res.send("User Not Exist !!");
        }
    });
})

crudRouter.get('/' ,async (req, res, next) => {//read
    await db.query('SELECT * FROM users', async function (error, results, fields) {
        console.log(results);
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0){
            await keys.forEach(function (key) {
            var result = results[key];
            res.status(200).json({ data: results });    
        });
    }else{
            return res.end("DATA Is EM?PTY !!");
    }
    });
})









crudRouter.post('/' ,async (req, res, next) => {//create
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



crudRouter.put('/' , async (req, res, next) => {//update
    var finder = req.body.id
    data = {}
    var name = req.body.name;
    var price = req.body.price;
    var description = req.body.description;
    var categoryID = req.body.categoryID;

    if (name != null) {
        name = req.body.name
        data['name'] = name;
    }
    if (price != null) {
        price = req.body.price
        data['price'] = price;
    }
    if (description != null) {
        description = req.body.description
        data['description'] = description;
    }
    if (categoryID != null) {
        price = req.body.categoryID
        data['categoryID'] = categoryID;
    }
    function generateUpdateQuery(data, tableName, clauseKey, clauseValue) {
        let part1 = `UPDATE ${tableName} SET`;
        let part2 = `WHERE ${clauseKey} = '${clauseValue}';`; //Add any number of filter clause statements here
        let updateString = "";
        for (let key in data) {
            updateString += ` \`${key}\` = '${data[key]}',`;
        }
        updateString = updateString.slice(0, -1);
        let query = `${part1} ${updateString} ${part2}`;
        return query;
    }

    var query = generateUpdateQuery(data, 'products', 'pID', finder);

    console.log(query);
    await db.query("SELECT * FROM products WHERE pID =  ?", [finder], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        console.log(len);
        if (len != 0) {
            db.query(query, (error, results, fields) => {
                console.log(results);
                res.send('product updated');
            });
        } else {
            res.send("product NOT Exist !!");
        }
    });
})


crudRouter.delete('/' ,async (req, res, next) => {//delete
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




module.exports = crudRouter;