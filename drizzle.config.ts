import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import { Resource } from 'sst';

const config = Resource.NextPgPostgres;

export default defineConfig({
  out: './migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    database: config.database,
  },
});
