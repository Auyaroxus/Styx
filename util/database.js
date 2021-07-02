const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "styx-schema",
    password: "DOM12pos*SECTR",
});

module.exports = pool.promise();