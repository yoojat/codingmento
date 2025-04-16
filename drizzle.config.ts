import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts",
  out: "./app/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.CODINGMENTO_DATABASE_URL!,
  },
  schemaFilter: ["public"],
});
