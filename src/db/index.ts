import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Resource } from 'sst';

import * as schema from './schema';

const config = Resource.NextPgPostgres;

const pool = new Pool({
  host: config.host,
  port: config.port,
  user: config.username,
  password: config.password,
  database: config.database,
});

export const db = drizzle(pool, { schema });
