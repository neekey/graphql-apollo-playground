const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { HttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');
const gql = require('graphql-tag');

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
    cache: new InMemoryCache()
});

client.query({ query: gql`{ hello }` }).then(console.log);