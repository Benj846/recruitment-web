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
const port = process.env.PORT || 23306;

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
app.post('/member/getname', async (req, res, next) => {
  const { uid } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query('SELECT NAME from TB_CMN_MEMBER WHERE UID=?', [uid]);
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 이력서 등록
// 기본 정보
app.post('/resume/insertbasic', async (req, res, next) => {
  const { info } = req.body;
  // console.log('info.email', info.email);
  // console.log('info.phone', info.phone);
  // console.log('info.military', typeof info.military);
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO fapply.TB_IND_RESUME 
    (UID, PHONE, MILITARY, ADDR_ZIP, ADDR_ROAD, ADDR_DETAIL, REG_DATE) 
    VALUES(?, ?, ?, '22001', '인천 연수구 컨벤시아대로42번길 8', '102-415', 20210223)`,
      [info.email, info.phone, info.military]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 학력사항
app.post('/resume/insertedu', async (req, res, next) => {
  const { info } = req.body;
  console.log('info.etype type', typeof info.etype);
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'INSERT INTO fapply.TB_IND_RSM_EDUC (UID, RID, `TYPE`, UNIV_NAME, MAJOR, LOCATION, START_DATE, END_DATE)' +
        'VALUES(?, 1, ?, ?, ?, ?, ?, ?)',
      [
        info.email,
        info.etype,
        info.university,
        info.edmajor,
        info.uni_region,
        info.uni_smonth,
        info.uni_emonth
      ]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 경력사항
app.post('/resume/insertcareer', async (req, res, next) => {
  const { info } = req.body;
  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      'INSERT INTO fapply.TB_IND_RSM_CARR (UID, RID, WRK_LV3, COR_NAME, EMP_TYPE, `POSITION`,' +
        'WORK_YN, WRK_LV4, ACHIEVEMENT, WSTART_DATE, WEND_DATE, CSTART_DATE, CEND_DATE)' +
        'VALUES(?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        info.email,
        info.levelThree,
        info.company,
        info.emtype,
        info.lposition,
        info.present,
        info.levelFour,
        info.main_result,
        info.job_smonth,
        info.job_emonth,
        info.csmonth,
        info.cemonth
      ]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});
// 자격면허
app.post('/resume/insertcerti', async (req, res, next) => {
  const { info } = req.body;
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO fapply.TB_IND_RSM_CERT (UID, RID, CDATE, CNAME, CLEVEL, CAUTH) 
      VALUES(?, 1, ?, ?, ?, ?)`,
      [info.email, info.dmonth, info.dname, info.dlevel, info.dagency]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 공인시험
app.post('/resume/insertexam', async (req, res, next) => {
  const { info } = req.body;
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO fapply.TB_IND_RSM_AUTH (UID, RID, CDATE, CNAME, CLEVEL, CAUTH) 
      VALUES(?, 1, ?, ?, ?, ?)`,
      [info.email, info.exmonth, info.exname, info.exlevel, info.exagency]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 보유기술
app.post('/resume/insertskill', async (req, res, next) => {
  const { info } = req.body;
  try {
    const [dataList, fieldPacket] = await pool.query(
      `INSERT INTO fapply.TB_IND_RSM_TECH (UID, RID, CSTART_DATE, CEND_DATE, CNAME, CLEVEL, CDESC) 
      VALUES(?, 1, ?, ?, ?, ?, ?)`,
      [
        info.email,
        info.ssmonth,
        info.semonth,
        info.sname,
        info.slevel,
        info.sdesc
      ]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

// 논문/포트폴리오 x

// 자기소개서
app.post('/resume/insertintro', async (req, res, next) => {
  const { info } = req.body;

  try {
    const [
      dataList,
      fieldPacket
    ] = await pool.query(
      `INSERT INTO fapply.TB_IND_RSM_INTD (UID, RID, CDESC) VALUES(?, 1, ?)`,
      [info.email, info.intro]
    );
    res.send(dataList);
  } catch (err) {
    console.log(res.status(500).json(err));
  }
});

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

// -------------------------Graphql---------------------------------
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
    'SELECT distinct c.ID, b.COR_NAME, b.CID as COR_IDX, b.CSTART_DATE, b.CEND_DATE, b.WRK_LV3, b.WRK_LV4, c.NAME, c.WRK_STATUS, c.LGN_DATE, c.UID, d.UNIV_NAME, d.IID as UNIV_IDX1, d.TID as UNIV_IDX2, d.`TYPE`, d.MAJOR FROM TB_IND_RSM_CERT a, TB_IND_RSM_CARR b, TB_CMN_MEMBER c, TB_IND_RSM_EDUC d, TB_IND_RESUME e WHERE c.UID = b.UID AND c.UID = a.UID AND c.UID = d.UID AND c.UID = e.UID ORDER BY c.id'
  );
  console.log(rows);
  return rows;
};
const resolvers = {
  Query: {
    getDefaultWork: (parent, { LV, ID, UPPER_ID }, context, info) =>
      getDefaultWork({ LV, ID, UPPER_ID }),
    getLevelWork: (_, { LV, ID }) => getLevelWork({ LV, ID }),
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
