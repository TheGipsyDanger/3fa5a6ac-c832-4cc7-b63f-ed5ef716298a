import 'dotenv/config';
import type {CodegenConfig} from '@graphql-codegen/cli';

console.log({env: process.env.NEXT_PUBLIC_GRAPHQL_URI});

const SCHEMA_URL = process.env.NEXT_PUBLIC_GRAPHQL_URI;
const GENERATED_PATH = './src/__gql__';

const config: CodegenConfig = {
  schema: SCHEMA_URL,
  documents: [
    'src/**/*.tsx',
    'src/**/*.ts',
    'src/**/*.graphql',
    `!${GENERATED_PATH}`,
  ],
  generates: {
    [`${GENERATED_PATH}/`]: {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
