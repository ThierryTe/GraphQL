let users = [
  { id: 1, nom: "Thierry", email: "thiery@gmail.com", age: 17 },
  { id: 2, nom: "Tewendé", email: "teende@gmail.com", age: 37 }
]


const messageHello = "Hello !"
const resolvers = {
  Query: {
    hello: (parent, args, content, info) => messageHello,
    users: () => users,
    user: (parent, args) => users.find(user => user.id == args.id)
  },
  Mutation: {
    createUser: (parent, { id, nom, email, age }) => {
      let checkID = users.findIndex(user => user.id == id)
      if (checkID == -1) {
        let newUser = { id, nom, email, age }
        users.push(newUser)
        return newUser
      } else {
        throw new Error('cet id existe déjà')
      }
    },
    deleteUser: (parent, { id }) => {
      let checkID = users.findIndex(user => user.id == id)
      if (checkID != -1) {
        users.splice(checkID, 1)
        return true
      } else {
        throw new Error('Utilisateur abscent')
      }
    }

  }
}
export default resolvers
