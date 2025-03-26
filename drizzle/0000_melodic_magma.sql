CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"link" varchar(512) NOT NULL,
	"salary" integer NOT NULL,
	"company" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"location_type" varchar(50) NOT NULL,
	"type" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"tags" jsonb,
	"experience_min" integer NOT NULL,
	"experience_max" integer NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
