import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./graphql/resolvers";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const typeDefs = loadSchemaSync("./**/*.gql", {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  typeDefs: typeDefs as any,
  resolvers: resolvers as any,
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3001 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
