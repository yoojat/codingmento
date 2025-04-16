import {
  pgTable,
  bigint,
  text,
  jsonb,
  timestamp,
  uuid,
  primaryKey,
  integer,
  check,
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";
import { sql } from "drizzle-orm";
export const products = pgTable("products", {
  product_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: text().notNull(),
  tagline: text().notNull(),
  description: text().notNull(),
  how_it_works: text().notNull(),
  icon: text().notNull(),
  stats: jsonb().notNull().default({ views: 0, revviews: 0 }),
  profile_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  category_id: bigint({ mode: "number" }).references(
    () => categories.category_id,
    { onDelete: "set null" }
  ),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const categories = pgTable("categories", {
  category_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: text().notNull(),
  description: text().notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const product_upvotes = pgTable(
  "product_upvotes",
  {
    product_id: bigint({ mode: "number" }).references(
      () => products.product_id,
      { onDelete: "cascade" }
    ),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade",
    }),
  },
  // constraint 제약조건
  (table) => [primaryKey({ columns: [table.product_id, table.profile_id] })]
  // composite primary key 복합키(컬럼들로 이뤄짐)
);

export const reviews = pgTable(
  "reviews",
  {
    review_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    product_id: bigint({ mode: "number" }).references(
      () => products.product_id,
      { onDelete: "cascade" }
    ),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade",
    }),
    rating: integer().notNull(),
    review: text().notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
  },

  // constraint 제약조건
  (table) => [check("rating_check", sql`${table.rating} BETWEEN 1 AND 5`)]
);
