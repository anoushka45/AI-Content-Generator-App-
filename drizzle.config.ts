import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'your url',
  },
});
