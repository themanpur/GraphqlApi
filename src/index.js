// src/index.js
const {GraphQLServer} = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const {prisma} = require('./generated/prisma-client')
const {typeDefs} = require('./schema.graphql')
const {makeExecutableSchema} = require('graphql-tools')
const User = require('./resolvers/User')
const resolvers = {
    Query,
    Mutation,
    User
}
const schema = makeExecutableSchema({typeDefs,resolvers})
const server = new GraphQLServer({
    schema,
    context: request=> ({...request,prisma})
    
})
server.start(() => console.log('Server is running on http://localhost:4000')) 
