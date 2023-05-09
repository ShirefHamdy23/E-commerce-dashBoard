const express = require("express");
const db = require('../DB/dbConnection');
const mysql = require("mysql");
const { Result } = require('express-validator');
const { connection } = require('../DB/dbConnection');
const verify = require('../middleware/verify.js');
const { log } = require('console');
const categoryRouter = express.Router();//focus



categoryRouter.get('/readSpecificRow',verify,async (req, res, next) => {//read
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
categoryRouter.get('/', verify ,async (req, res, next) => {//read
    await db.query('SELECT * FROM category', async function (error, results, fields) {
        console.log(results);
        console.log(results[0]['name']);
        var keys = Object.keys(results);
        var len = keys.length;
        keys.forEach(function (key) {
            var result = results[key];
            console.log("category name : " + result.name + "\ncategory title : " + result.title + "\ncategory Description : " + result.description + "\n")
        });
        res.send('check terminal');
    });

})

categoryRouter.post('/',verify , async (req, res, next) => {//create
    var name = req.body.name
    await db.query('SELECT * FROM category WHERE name = ?', [name], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len == 0) {
            const sqlInsert = "INSERT INTO category(name, title, description,categoryID)VALUES (?,?,?,?)"
            const insert_query = mysql.format(sqlInsert, [req.body.name, req.body.title, req.body.description, req.body.categoryID])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
                res.send('category added');
            });
        } else {
            res.send("category Already Exist !!");
        }
    });

})

categoryRouter.put('/', verify ,async (req, res, next) => {//update
    var finder = req.body.id
    data = {}
    var name = req.body.name;
    var title = req.body.title;
    var description = req.body.description;
    var categoryID = req.body.categoryID;

    if (name != null) {
        name = req.body.name
        data['name'] = name;
    }
    if (title != null) {
        price = req.body.title
        data['title'] = title;
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

    var query = generateUpdateQuery(data, 'category', 'pID', finder);

    console.log(query);
    await db.query("SELECT * FROM category WHERE pID =  ?", [finder], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        console.log(len);
        if (len != 0) {
            db.query(query, (error, results, fields) => {
                console.log(results);
                res.send('category updated');
            });
        } else {
            res.send("category NOT Exist !!");
        }
    });
})

categoryRouter.delete('/', verify ,async (req, res, next) => {//delete
    var name = req.body.name
    await db.query('SELECT * FROM category WHERE name = ?', [name], async function (error, results, fields) {
        var keys = Object.keys(results);
        var len = keys.length;
        if (len != 0) {
            const sqlInsert = "DELETE FROM category WHERE name = ?"
            const insert_query = mysql.format(sqlInsert, [req.body.name])
            console.log(insert_query);
            await db.query(insert_query, (error, results, fields) => {
                res.send('category Deleted');
            });
        } else {
            res.send("category Not Exist !!");
        }
    });
})




//don't forget to export
module.exports = categoryRouter;