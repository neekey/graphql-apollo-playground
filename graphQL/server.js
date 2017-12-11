var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var graphQLSchema = require('./schema');
var schemaRoot = require('./schemaRoot');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(graphQLSchema);

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: schemaRoot,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
