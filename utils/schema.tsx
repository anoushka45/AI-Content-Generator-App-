import { pgTable, serial , text, varchar } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  displayedOutput: text('displayedOutput'), // New column for the actual output shown to the user

  templateSlug: varchar('templateSlug').notNull(), // Renamed to match the input
});
