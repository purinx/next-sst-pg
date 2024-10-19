CREATE TABLE IF NOT EXISTS "messages" (
	"uuid2" uuid DEFAULT gen_random_uuid(),
	"from" varchar(256),
	"body" text
);
