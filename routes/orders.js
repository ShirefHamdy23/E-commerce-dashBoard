const express = require("express");
const db = require('../DB/dbConnection');
const verify = require('../middleware/verify.js');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const { log } = require('console');
const ordersRouter = express.Router();
const { Table } = require('./Table');

class orders extends Table {
    constructor(connection) {
        super(connection, "orders");
        this.orders = orders;
    }
}

ordersRouter.get('/readSpecificRow', async (req, res, next) => {//read
    var orderID = req.body.orderID
    await db.query('SELECT * FROM orders WHERE orderID = ?', [orderID], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "SELECT * FROM orders where orderID = ?"
            const insert_query = mysql.format(sqlInsert, orderID)
            await db.query(insert_query, (error, results, fields) => {
                keys.forEach(function (key) {
                    var result = results[key];
                    console.log("orders Price : " + result.price + "\norders date : " + result.date + "\norders SKU :  " + result.SKU + "\norder id :  " + result.orderID + "\nproducts id :  " + result.userID + "\nuser id :  " + result.userID)
                });
                res.send('orders Exist');
            });
        } else {
            res.send("orders Not Exist !!");
        }
    });

})


ordersRouter.get('/', async (req, res, next) => {//read
    await db.query('SELECT * FROM orders', async function (error, results, fields) {
        console.log(results);
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            keys.forEach(function (key) {
                var result = results[key];
                return res.status(200).json({ data: results });
            });
        } else {
            return res.end("DATA IS EMPTY !!");
        }
    });
})


ordersRouter.post('/', async (req, res, next) => {//create
    var orderID = req.body.orderID
    await db.query('SELECT * FROM orders WHERE orderID = ?', [orderID], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len == 0) {
            const sqlInsert = "INSERT INTO orders(price, SKU, pID, userID)VALUES (?,?,?,?)"
            const insert_query = mysql.format(sqlInsert, [req.body.price, req.body.SKU, req.body.pID, req.body.userID])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
                res.send('order added');
            });
        } else {
            res.send("order Already Exist !!");
        }
    });
})


ordersRouter.put('/', async (req, res, next) => {//update
    var finder = req.body.id
    data = {}
    var orderID = req.body.orderID;
    var price = req.body.price;
    var pID = req.body.pID;
    var userID = req.body.userID;

    if (orderID != null) {
        orderID = req.body.orderID
        data['orderID'] = orderID;
    }
    if (price != null) {
        price = req.body.price
        data['price'] = price;
    }
    if (pID != null) {
        pID = req.body.pID
        data['pID'] = pID;
    }
    if (userID != null) {
        userID = req.body.userID
        data['userID'] = userID;
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

    var query = generateUpdateQuery(data, 'orders', 'orderID', finder);

    console.log(query);
    await db.query("SELECT * FROM orders WHERE orderID =  ?", [finder], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        console.log(len);
        if (len != 0) {
            db.query(query, (error, results, fields) => {
                console.log(results);
                res.send('order updated');
            });
        } else {
            res.send("order NOT Exist !!");
        }
    });
})


ordersRouter.delete('/', async (req, res, next) => {//delete
    var orderID = req.body.orderID
    await db.query('SELECT * FROM orders WHERE orderID = ?', [orderID], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "DELETE FROM orders WHERE orderID = ?"
            const insert_query = mysql.format(sqlInsert, [req.body.orderID])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
                res.send('order Deleted');
            });
        } else {
            res.send("order Not Exist !!");
        }
    });
})







module.exports = ordersRouter;