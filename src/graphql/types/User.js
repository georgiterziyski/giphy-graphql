export default `

    type User {
        _id: String!
        username: String!
        email: String!
        userType: String!
        password: String!
        gifs: [Gif]
    }

    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        addUser(username: String!, email: String!, userType: String!, password: String!): String
        login(email: String!, password: String!): String
        deleteUser(_id: String!): User
        editUser(_id: String!, username: String!, email: String!, password: String!): User
    }

`