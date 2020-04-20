export default `

    input GifInput {
        _id: String!
        title: String!
        imageUrl: String!
    }

    type Gif {
        _id: String!
        title: String!
        imageUrl: String!
    }

    type Query {
        gif(_id: String!): Gif
        gifs: [Gif]
    }

    type Mutation {
        addGif(title: String!, imageUrl: String!): Gif
        deleteGif(_id: String!): Gif
        editGif(_id: String!, title: String!, imageUrl: String!): Gif
    }

`