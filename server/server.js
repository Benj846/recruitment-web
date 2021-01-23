const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3333;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/member/count', (req, res) => {
  db.query('SELECT COUNT(*) COUNT from TB_CMN_MEMBER', (err, result) => {
    if (err) {
      console.log(error, err);
      throw err;
    }
    res.send(result);
  });
});

//

// file uplaod

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
// Webpack config

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

// // const RootQueryType = new GraphQLObjectType({
// //   name: 'Query',
// //   description: 'Root Query',
// //   fields: () => ({
// //     id: {
// //       type: GraphQLNonNull(GraphQLInt)
// //     }
// //   })
// // });

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'helloworld',
//     fields: () => ({
//       message: { type: GraphQLString, resolve: () => 'hello world' }
//     })
//   })
// });
// // const schema = new GraphQLSchema({
// //   query: RootQueryType
// // });
// app.use(
//   '/graphql/',
//   expressGraghQL({
//     schema: schema,
//     graphiql: true
//   })
// );

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
// app.use(express.static(path.resolve(__dirname, '../dist')));
// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../dist/index.html'));
//   res.end();
// });
app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(error, err);
  }
  console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
});
module.exports = app;
