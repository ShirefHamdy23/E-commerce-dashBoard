const express = require("express");
const db = require("../DB/dbConnection");
const verify = require("../middleware/verify.js");
const mysql = require("mysql");
const { Result } = require("express-validator");
const { connection } = require("../DB/dbConnection");
const { log } = require("console");
const { DefaultQueryStrategy } = require('./DefaultQueryStrategy');
const { QueryStrategy } = require('./QueryStrategy');

class Table {
    constructor(connection, tableName,queryStrategy = new DefaultQueryStrategy()) {
        this.connection = connection;
        this.tableName = tableName;
        this.queryStrategy = queryStrategy;
    }

    create(record) {
        return new Promise((resolve, reject) => {
            const { sql, values } = this.queryStrategy.buildInsertQuery(record, this.tableName);
            this.connection.query(sql, values, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.insertId);
                }
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            const { sql, values } = this.queryStrategy.buildSelectQuery(id, this.tableName);
            this.connection.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    update(id, record) {
        return new Promise((resolve, reject) => {
            const { sql, values } = this.queryStrategy.buildUpdateQuery(id, record, this.tableName);
            this.connection.query(sql, values, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            const { sql, values } = this.queryStrategy.buildDeleteQuery(id, this.tableName);
            this.connection.query(sql, values, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    }
}

module.exports = {Table};