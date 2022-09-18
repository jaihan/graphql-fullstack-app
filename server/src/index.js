const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const resolvers = {
  Query: {
    info: () => `This is the API graphql full stack`,
    findAll: async (parent, args, context) => {
      return context.prisma.user.findMany();
    },
  },
  Mutation: {
    addUser: (parent, args, context, info) => {
      const user = context.prisma.user.create({
        data: {
          prefix: args.prefix,
          firstName: args.firstName,
          surName: args.surName,
          email: args.email,
          mobilePhone: args.mobilePhone,
          gender: args.gender,
          age: args.age,
          nationlity: args.nationlity,
          org: args.org,
          jobTitle: args.jobTitle,
        },
      });
      return user;
    },
  },
};

const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
