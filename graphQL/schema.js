module.exports = `
  type Note {
    id: Int!
    name: String
    read: Boolean
  }
  
  type Query {
    noteList: [Note]
    note(id: Int!): Note
  }
`;
