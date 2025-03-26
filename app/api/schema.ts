import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core"

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  link: varchar("link", { length: 512 }).notNull(),

  salary: integer("salary").notNull(),

  company: varchar("company", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  location_type: varchar("location_type", { length: 50 }).notNull(), // on-site, remote, hybrid

  type: varchar("type", { length: 255 }).notNull(), // full-time, part-time, contractor, internship, freelance, volunteer
  category: varchar("category", { length: 255 }).notNull(), // frontend, backend, full-stack, mobile, etc.
  tags: jsonb("tags"), // Array of tags for flexible categorization and filtering

  experience_min: integer("experience_min").notNull(), // 0, 1, 2, 3
  experience_max: integer("experience_max").notNull(), // 0, 1, 2, 3

  is_active: boolean("is_active").default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})
