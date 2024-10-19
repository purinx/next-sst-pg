import { sql } from 'drizzle-orm';
import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const messageTable = pgTable('messages', {
  id: uuid('uuid2')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  from: varchar({ length: 256 }),
  body: text(),
});
