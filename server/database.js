const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE
});
// const connection = mysql.createConnection({
//   host: '34.64.233.251',
//   user: 'fapply',
//   password: 'fapply@mysql',
//   database: 'fapply'
// });
connection.connect();
// connection.query('SELECT * FROM TB_COMMON_WORK', (err, rows) => {
//   //if (err) throw err;
//   console.log('the solution is : ', rows[0]);
// });

module.exports = connection;