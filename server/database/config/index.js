const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'database-v3.ctyrwnpg6rvg.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Awesomev3',
    database: 'dbawesomeos'
});

module.exports = pool