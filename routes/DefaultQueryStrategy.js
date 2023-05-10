const express = require("express");
const db = require("../DB/dbConnection");
const verify = require("../middleware/verify.js");
const mysql = require("mysql");
const { Result } = require("express-validator");
const { connection } = require("../DB/dbConnection");
const { log } = require("console");

class DefaultQueryStrategy {

    buildInsertQuery(record, tableName) {
        return {
            sql: `INSERT INTO ${tableName} SET ?`,
            values: record,
        };
    }

    buildSelectQuery(id, tableName) {
        return {
            sql: `SELECT * FROM ${tableName} WHERE id = ?`,
            values: id,
        };
    }
    buildSelectQuery(tableName) {
        return {
            sql: `SELECT * FROM ${tableName} WHERE 1`,
        };
    }

    buildUpdateQuery(id, record, tableName) {
        return {
            sql: `UPDATE ${tableName} SET ? WHERE id = ?`,
            values: [record, id],
        };
    }

    buildDeleteQuery(id, tableName) {
        return {
            sql: `DELETE FROM ${tableName} WHERE id = ?`,
            values: id,
        };
    }
}
module.exports = DefaultQueryStrategy;