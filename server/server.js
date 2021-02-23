const express = require('express');
//const router = express.Router();
//const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');
const { pool } = require('./database');
const typeDefs = require('./schema');
const { ApolloServer, gql } = require('apollo-server-express');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3333;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/work/lv1', async (req, res, next) => {
  try {
    const [dataList, fieldPacket] = await pool.query(
      'SELECT * from TB_CMN_WORK WHERE LV=1'
    );
    res.send(dataList);
  } catch (err) {
    //return res.status(500).json(err)
    console.log(res.status(500).json(err));
  }
});

app.post('/work/lv2', async (req, res, next) => {
  const { id } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'SELECT * from TB_CMN_WORK WHERE LV=2 AND UPPER_ID=?',
      [id]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/work/lv3', async (req, res, next) => {
  const { id } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'SELECT * from TB_CMN_WORK WHERE LV=3 AND UPPER_ID=?',
      [id]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/work/lv4', async (req, res, next) => {
  const { id, upperId, count } = req.body;
  try {
    let result;
    if (count === 1) {
      result = await pool.query(
        'SELECT * from TB_CMN_WORK WHERE LV=4 AND UPPER_ID = ? OR LV=4 AND UPPER_ID = ?',
        [id[0], upperId[0]]
      );
    } else if (count === 2) {
      result = await pool.query(
        'SELECT * from TB_CMN_WORK WHERE LV=4 AND UPPER_ID IN(?, ?) OR LV=4 AND UPPER_ID IN(?, ?)',
        [id[0], id[1], upperId[0], upperId[1]]
      );
    } else if (count === 3) {
      result = await pool.query(
        'SELECT * from TB_CMN_WORK WHERE LV=4 AND UPPER_ID IN(?, ?, ?) OR LV=4 AND UPPER_ID IN(?, ?, ?)',
        [id[0], id[1], id[2], upperId[0], upperId[1], upperId[2]]
      );
    }
    const [dataList, fieldPacket] = result;
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/member/count', async (req, res, next) => {
  const { email } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'SELECT COUNT(*) COUNT from TB_CMN_MEMBER WHERE UID = ?',
      [email]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/member/insert', async (req, res, next) => {
  const { uid, name, password, utype } = req.body;
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO TB_CMN_MEMBER(UID, LGN_TYPE, PW, NAME, USR_TYPE, PW_CHG_DATE, REG_DATE)
    VALUE(?, ?, ?, ?, ?, 0, 0)`,
      [uid, 0, password, name, utype]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/corp/insert', async (req, res, next) => {
  const { uid, name, password, ctype, utype } = req.body;
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO TB_CMN_MEMBER(UID, LGN_TYPE, CRP_TYPE, PW, NAME, USR_TYPE, PW_CHG_DATE, REG_DATE)
    VALUE(?, ?, ?, ?, ?, ?, 0, 0)`,
      [uid, 0, ctype, password, name, utype]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

app.post('/member/login', async (req, res, next) => {
  const { uid, utype } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'SELECT COUNT(*) COUNT from TB_CMN_MEMBER WHERE UID = ? AND USR_TYPE=?',
      [uid, utype]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

const multer = require('multer');
//DB이미지 불러오기, 1자리에 id나 email 넣어서 고객 식별
app.use(express.static('./uploads'));
app.get('/api/getimage/:id', async function (req, res) {
  let id = req.params.id;
  // let email = req.params.email;
  let [rows, fields] = await pool.query(
    // 'SELECT * FROM TB_CMN_MEMBER where id=' + "'" + id + "'"
    'SELECT * FROM TB_CMN_MEMBER where id=1'
  );
  console.log(rows);
  res.send(rows);
});

//파일 이름, 저장경로 설정
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, 'file' + Date.now() + path.extname(file.originalname));
  }
});
var uploadWithOriginalFilename = multer({ storage: storage });

//이미지 업데이트, 현재 id=1로 고정 되어있음
app.post(
  '/api/upload',
  uploadWithOriginalFilename.single('profileName'),
  function (req, res) {
    try {
      let sql = 'UPDATE TB_CMN_MEMBER SET PIC=? WHERE id=1';
      let imageName = req.file.filename;
      let params = [imageName];
      pool.query(sql, params, (err, rows, fields) => {
        res.send(rows);
      });
    } catch (error) {
      console.error(error);
    }
  }
);

//이미지 삭제, 현재 id=1로 고정 되어있음
app.post(
  '/api/deleteimage',
  uploadWithOriginalFilename.single('profileName'),
  async function (req, res) {
    let [rows, fields] = await pool.query(
      'UPDATE TB_CMN_MEMBER SET PIC=null WHERE id=1'
    );
    res.send(rows);
  }
);

// app.post(
//   '/api/upload',
//   uploadWithOriginalFilename.single('profileName'),
//   function (req, res) {
//     let sql = 'INSERT INTO TB_CMN_MEMBER (id,PIC) VALUES (null,?)';
//     let name = req.file.filename;
//     // let file_path = './uploads/' + req.file.filename;
//     // let email = req.body.email;
//     // console.log(req.body.email);
//     // let params = [name, file_path, email];
//     let params = [name];
//     // console.log(req.file);
//     // console.log(name);
//     // console.log(file_path);
//     pool.query(sql, params, (err, rows, fields) => {
//       res.send(rows);
//     });
//   }
// );
//==

// 이 부분을 async로 고쳐야 함
// app.post('/member/count', (req, res) => {
//   let sql = `SELECT COUNT(*) COUNT from TB_CMN_MEMBER WHERE UID = ?`;
//   let params = [req.body.email];
//   db.query(sql, params, (err, result, fields) => {
//     if (err) {
//       console.log(error, err);
//       throw err;
//     }
//     res.send(result);
//   });
// });
// const db = async () => {
//   try {
//     const connection = await pool.getConnection(async (conn) => conn);
//     try {
//       const [rows] = await connection.query(
//         'SELECT * from TB_CMN_WORK WHERE LV=4 AND UPPER_ID=17'
//       );
//       connection.release();
//       return rows;
//     } catch (err) {
//       console.log('Query Error');
//       connection.release();
//       return false;
//     }
//   } catch (err) {
//     console.log('DB Error');
//     return false;
//   }
// };
// app.post('/member/insert', (req, res) => {
//   let sql = `INSERT INTO TB_CMN_MEMBER(UID, LGN_TYPE, PW, NAME, USR_TYPE, PW_CHG_DATE, REG_DATE)
//     VALUE(?, ?, ?, ?, ?, 0, 0)`;
//   let params = [
//     req.body.memberInfo.uid,
//     0,
//     req.body.memberInfo.pw,
//     req.body.memberInfo.name,
//     req.body.memberInfo.usr_type
//   ];
//   pool.query(sql, params, (err, result, fields) => {
//     if (err) {
//       console.log(error, err);
//       throw err;
//     }
//     res.send(result);
//   });
// });

// app.get('/work/lv4', (req, res) => {
//   let sql = `SELECT * from TB_CMN_WORK WHERE LV=4 AND UPPER_ID=17`;
//   pool.query(sql, (err, result, fields) => {
//     if (err) {
//       console.log(error, err);
//       throw err;
//     }
//     res.send(result);
//   });
// });

const getDefaultWork = async ({ LV, ID, UPPER_ID }) => {
  const [rows, fields] = await pool.query('select * from TB_CMN_WORK');
  const filteredWorks = rows.filter((args) => args.LV === LV);
  return filteredWorks;
};
const getLevelWork = async ({ LV, ID, UPPER_ID }) => {
  const [rows, fields] = await pool.query('select * from TB_CMN_WORK');
  const lv2work = rows.filter((val) => val.UPPER_ID === ID && val.LV === LV);
  return lv2work;
};
const getRSM_CARR = async () => {
  const [rows, fiellds] = await pool.query(
    'SELECT distinct c.id, b.COR_NAME, b.CID as COR_IDX, b.CSTART_DATE, b.CEND_DATE, b.WRK_LV3, b.WRK_LV4, c.NAME, c.WRK_STATUS, c.LGN_DATE, c.UID, d.UNIV_NAME, d.IID as UNIV_IDX1, d.TID as UNIV_IDX2, d.`TYPE`, d.MAJOR FROM TB_IND_RSM_CERT a, TB_IND_RSM_CARR b, TB_CMN_MEMBER c, TB_IND_RSM_EDUC d, TB_IND_RESUME e WHERE c.UID = b.UID AND c.UID = a.UID AND c.UID = d.UID AND c.UID = e.UID ORDER BY c.id'
  );
  console.log(rows);
  return rows;
};
const resolvers = {
  Query: {
    getDefaultWork: (parent, { LV, ID, UPPER_ID }, context, info) =>
      getDefaultWork({ LV, ID, UPPER_ID }),
    // getlv2Work: (parent, args, context, info) => {
    //   getlv2Work();
    // }
    getLevelWork: (_, { LV, ID }) => getLevelWork({ LV, ID }),
    // getlv2Work: (_, { LV, ID }) => console.log(LV)
    getRSM_CARR: () => getRSM_CARR()
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  }
});
server.applyMiddleware({
  app
});

// Webpack config
if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, '../client/public'),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
  console.log('hello');
});

module.exports = app;
