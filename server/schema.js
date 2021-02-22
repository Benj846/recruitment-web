const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Work {
    ID(id: ID): Int!
    LV: Int!
    VAL: String!
    UPPER_ID: Int!
    USE_YN: Boolean!
  }
  type Resumelist {
    id: Int
    COR_NAME: String
    COR_IDX: Int
    CSTART_DATE: Int
    CEND_DATE: Int
    WRK_LV3: String
    WRK_LV4: String
    NAME: String
    WRK_STATUS: String
    LGN_DATE: Int
    UID: String
    UNIV_NAME: String
    UNIV_IDX1: Int
    UNIV_IDX2: Int
    TYPE: Int
    MAJOR: String
  }

  type Query {
    getDefaultWork(LV: Int, ID: Int, UPPER_ID: Int): [Work]
    getLevelWork(LV: Int, ID: Int): [Work]
    getRSM_CARR: [Resumelist]
  }
`;
module.exports = typeDefs;
