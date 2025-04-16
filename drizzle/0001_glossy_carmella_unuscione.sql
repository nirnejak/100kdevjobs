CREATE TABLE "job_submissions" (
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
	"submitter_email" varchar(255) NOT NULL,
	"submitter_name" varchar(255) NOT NULL,
	"status" varchar(50) DEFAULT 'pending' NOT NULL,
	"admin_notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "job_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
