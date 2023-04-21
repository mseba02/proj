const { buildSchema } = require('graphql')
module.exports = buildSchema(`

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String
        status: String!
    }
    
    type UsersData {
        users: [User!]! 
    }
       
    type AuthData {
        token: String!
        userId: String!
    }

    type RootQuery {
        getUsers: UsersData!
    }

    type RootMutation {
        login(email: String!, password: String!): AuthData!
        createUser(email: String!, password: String!, firstName: String!, lastName: String!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    } 
`)
