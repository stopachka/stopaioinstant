CREATE TABLE IF NOT EXISTS "bodies" (
	"id" uuid PRIMARY KEY NOT NULL,
	"markdown" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "body_id" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_body_id_bodies_id_fk" FOREIGN KEY ("body_id") REFERENCES "public"."bodies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
