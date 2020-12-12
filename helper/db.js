const mySql = require("mysql2");

const pool = mySql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'nodejsdb',
    password : 'admin123'
})

module.exports = pool.promise();