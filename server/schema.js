const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Work {
    ID(id: ID): Int!
    LV: Int!
    VAL: String!
    UPPER_ID: Int!
    USE_YN: Boolean!
  }
  type Test {
    name: String!
    id: Int
  }

  type Query {
    getDefaultWork(LV: Int, ID: Int, UPPER_ID: Int): [Work]
    getLevelWork(LV: Int, ID: Int): [Work]
  }
`;
module.exports = typeDefs;
