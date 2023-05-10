const db = require("../DB/dbConnection");
const verify = require("../middleware/verify.js");
const mysql = require("mysql");


//new like this
class Query {
    buildInsertQuery(record, tableName) {
        throw new Error('Method not implemented');
    }

    buildSelectQuery(id, tableName) {
        throw new Error('Method not implemented');
    }

    buildUpdateQuery(id, record, tableName) {
        throw new Error('Method not implemented');
    }

    buildDeleteQuery(id, tableName) {
        throw new Error('Method not implemented');
    }
}

module.exports = Query;
