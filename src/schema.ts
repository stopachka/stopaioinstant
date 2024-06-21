import { relations } from "drizzle-orm";
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const bodyTable = pgTable('bodies', {
  id: uuid('id').primaryKey(),
  markdown: text('markdown').notNull(),
});

export const postsTable = pgTable('posts', {
  id: uuid('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  body: uuid('body_id').notNull().references(() => bodyTable.id),
});

relations(postsTable, ({ one }) => ({
  body: one(bodyTable),
}));

export type InsertUser = typeof postsTable.$inferInsert;


