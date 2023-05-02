const mysql = require("mysql");
const dotenv = require('dotenv').config();
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "projectDataBase",
    port : "3301",
})

connection.connect((err)=>{
    if (err) throw err;
    console.log("DB CONNECTED");
});
module.exports = connection;