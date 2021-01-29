//const mysql = require('mysql2');
const { default: Axios } = require('axios');
const mysql = require('mysql2/promise');
require('dotenv').config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  queueLimit: 0
});
const getCommonWork = async (LV) => {
  const [rows, fields] = await pool.query('select * from TB_CMN_WORK');
  const filteredWorks = rows.filter((args) => args.LV === 1);
  console.log(filteredWorks);
  return filteredWorks;
};

module.exports = { getCommonWork, pool };

// solution 1
// // solution 2
// let connection;
// const handleDisconnect = () => {
//   connection = mysql.createConnection(dbConfig);
//   connection.connect(err => {
//      if (err) {
//        console.log('connecting db error', err);
//        setTimeout(handleDisconnect, 2000);
//      }
//   });

//   connection.on('error', err => {
//     console.log('connection error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   })
// }
// handleDisconnect();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_DATABASE
// });
// const connection = mysql.createConnection({
//   host: '34.64.233.251',
//   user: 'fapply',
//   password: 'fapply@mysql',
//   database: 'fapply'
// });
//connection.connect();
// connection.query('SELECT * FROM TB_COMMON_WORK', (err, rows) => {
//   //if (err) throw err;
//   console.log('the solution is : ', rows[0]);
// });

//module.exports = connection;
