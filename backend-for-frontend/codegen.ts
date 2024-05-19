import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "*/**/*.gql",
  generates: {
    "./src/graphql/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
