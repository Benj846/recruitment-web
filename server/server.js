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
const { getCommonWork, pool } = require('./database');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

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
// app.use('work/lv4', async (req, res, next)=>{
//   try {
//     const
//   } catch(err) {
//     next(err);
//   }
// });

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

const typeDefs = gql`
  type Work2 {
    ID: Int!
    LV: Int!
    VAL: String!
    UPPER_ID: Int!
    USE_YN: Boolean!
  }
  type Query {
    getCommonWork(LV: Int): [Work2]
  }
`;

const resolvers2 = {
  Query: {
    getCommonWork: (parent, LV, context, info) => getCommonWork(LV)
  }
};
// const resolversTest = {

// }
// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers
// });
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers2,
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

// app.use((req, res) => {
//   res.status(200);
//   res.send('Hello!');
//   res.end();
// });
// The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// app.use(fileUplo);
// REST APIs
// app.use(bodyParser.json());

// API routes
// require('./routes')(app);
// app.route('/test').get(function (req, res, next) {
//   connecttion.query(
//     'SELECT * FROM TB_COMMON_WORK WHERE lv = 1',
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log(results);
//     }
//   );
// });
// app.get('/status', (req, res) => res.json('working!'));

// app.get('/testjson', (req, res) => {
//   res.json({ message: 'Welcome to fapply application.' });
// });

//

// GraphQL
// const expressGraghQL = require('express-graphql').graphqlHTTP;
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLNonNull
// } = require('graphql');

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     id: {
//       type: GraphQLNonNull(GraphQLInt)
//     }
//   })
// });

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'helloworld',
//     fields: () => ({
//       message: { type: GraphQLString, resolve: () => 'hello world' }
//     })
//   })
// });
// const schema = new GraphQLSchema({
//   query: RootQueryType
// });
// app.use(
//   '/graphql/',
//   expressGraghQL({
//     schema: schema,
//     graphiql: true
//   })
// );

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
