import { jsonb, pgEnum, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const eventType = pgEnum("event_type", [
  "product_view",
  "product_visit",
  "profile_view",
]);

export const events = pgTable("events", {
  event_id: uuid("event_id").primaryKey().defaultRandom(),
  event_type: eventType("event_type"),
  event_data: jsonb("event_data"),
  created_at: timestamp("created_at").defaultNow(),
});
