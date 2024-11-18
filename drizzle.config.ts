import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:RheTr2gDHtF3@ep-still-lake-a1gyvhmt.ap-southeast-1.aws.neon.tech/ai-content-gen?sslmode=require',
  },
});
