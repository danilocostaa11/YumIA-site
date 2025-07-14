import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  companySize: text("company_size"),
  industry: text("industry"),
  annualRevenue: text("annual_revenue"),
  currentChallenges: text("current_challenges"),
  aiExperience: text("ai_experience"),
  biggestPainPoint: text("biggest_pain_point"),
  timeSpentOnManualTasks: text("time_spent_manual_tasks"),
  competitiveAdvantage: text("competitive_advantage"),
  budget: text("budget"),
  timeline: text("timeline"),
  decisionMaker: text("decision_maker"),
  message: text("message").notNull(),
  consent: boolean("consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const ebookDownloads = pgTable("ebook_downloads", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertEbookDownloadSchema = createInsertSchema(ebookDownloads).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertEbookDownload = z.infer<typeof insertEbookDownloadSchema>;
export type EbookDownload = typeof ebookDownloads.$inferSelect;
