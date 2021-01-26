const express = require('express');
const bodyParser = require('body-parser');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');
const getCommonWork = require('./database');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3333;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Graphql testing
// app.route('/test').get(function (req, res, next) {
//   pool.query('select * from TB_CMN_WORK', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
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
    getCommonWork(id: Int!): [Work2]
  }
`;
const resolvers = {
  Query: {
    getCommonWork: (id) => getCommonWork(id)
  }
};
// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers
// });
const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  }
});
schema.applyMiddleware({
  app
});
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
