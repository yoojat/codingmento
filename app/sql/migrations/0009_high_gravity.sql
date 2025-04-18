CREATE TABLE "teams" (
	"team_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "teams_team_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"product_name" text NOT NULL,
	"team_size" integer NOT NULL,
	"equity_split" integer NOT NULL,
	"product_stage" "product_stage" NOT NULL,
	"roles" text NOT NULL,
	"product_description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "team_size_check" CHECK ("teams"."team_size" BETWEEN 1 AND 100),
	CONSTRAINT "equity_split_check" CHECK ("teams"."equity_split" BETWEEN 1 AND 100),
	CONSTRAINT "product_description_check" CHECK (LENGTH("teams"."product_description") <= 200)
);
--> statement-breakpoint
-- DROP TABLE "team" CASCADE;