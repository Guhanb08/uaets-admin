import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.{graphql,gql,js,ts,jsx,tsx,gql,vue}",
  generates: {
    /*   "./src/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    }, */
    "./src/generated/operations.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: "vue",
        debug: false
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
