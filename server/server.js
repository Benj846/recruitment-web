const express = require('express');
const mysql = require('mysql2/promise');
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

app.post('/member/count', (req, res) => {
  let sql = `SELECT COUNT(*) COUNT from TB_CMN_MEMBER WHERE UID = ?`;
  let params = [req.body.email];
  db.query(sql, params, (err, result, fields) => {
    if (err) {
      console.log(error, err);
      throw err;
    }
    res.send(result);
  });
});

app.post('/member/insert', (req, res) => {
  let sql = `INSERT INTO TB_CMN_MEMBER(UID, LGN_TYPE, PW, NAME, USR_TYPE, PW_CHG_DATE, REG_DATE) 
    VALUE(?, ?, ?, ?, ?, 0, 0)`;
  let params = [
    req.body.memberInfo.uid,
    0,
    req.body.memberInfo.pw,
    req.body.memberInfo.name,
    req.body.memberInfo.usr_type
  ];
  db.query(sql, params, (err, result, fields) => {
    if (err) {
      console.log(error, err);
      throw err;
    }
    res.send(result);
  });
});

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
// const [rows, fields] = await pool.query('select * from TB_CMN_WORK');
// const lv2Works = rows.filter(
//   (val) => val.UPPER_ID === UPPER_ID,
//   console.log(UPPER_ID)
// );
// console.log(lv2Works);
// name: 'benjamin',
// id: 1
const resolvers = {
  Query: {
    getDefaultWork: (parent, { LV, ID, UPPER_ID }, context, info) =>
      getDefaultWork({ LV, ID, UPPER_ID }),
    // getlv2Work: (parent, args, context, info) => {
    //   getlv2Work();
    // }
    getLevelWork: (_, { LV, ID }) => getLevelWork({ LV, ID })
    // getlv2Work: (_, { LV, ID }) => console.log(LV)
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
