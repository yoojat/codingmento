import {
  bigint,
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { posts } from "../community/schema";
import { products } from "../products/schema";
import client from "~/supa-client";
import { productListSelect } from "../products/queries";

// type 스크립트가 제대로 작동하기 위해 추가
// 실제 데이터베이스는 supabase에서 관리
// 실제로 데이터베이스에서 만들어지지 않음
// drizzle에서 user테이블이 있다는 것을 인식시킴
const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

export const roles = pgEnum("role", [
  "developer",
  "designer",
  "marketer",
  "founder",
  "product-manager",
]);

export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  avatar: text(),
  name: text().notNull(),
  username: text().notNull(),
  headline: text(),
  bio: text(),
  role: roles().default("developer").notNull(),
  stats: jsonb().$type<{
    followers: number;
    following: number;
  }>(),
  views: jsonb(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const follows = pgTable("follows", {
  follower_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  following_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  created_at: timestamp().notNull().defaultNow(),
});

export const notificationType = pgEnum("notification_type", [
  "follow",
  "review",
  "reply",
  "mention",
]);

export const notifications = pgTable("notifications", {
  notification_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  source_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  product_id: bigint({ mode: "number" }).references(() => products.product_id, {
    onDelete: "cascade",
  }),
  post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
    onDelete: "cascade",
  }),
  target_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  type: notificationType().notNull(),
  created_at: timestamp().notNull().defaultNow(),
});

export const messageRooms = pgTable("message_rooms", {
  message_room_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  created_at: timestamp().notNull().defaultNow(),
});

export const messageRoomMembers = pgTable(
  "message_room_members",
  {
    message_room_id: bigint({ mode: "number" }).references(
      () => messageRooms.message_room_id,
      {
        onDelete: "cascade",
      }
    ),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade",
    }),
    created_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.message_room_id, table.profile_id] }),
  ]
);

export const messages = pgTable("messages", {
  message_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  message_room_id: bigint({ mode: "number" }).references(
    () => messageRooms.message_room_id,
    {
      onDelete: "cascade",
    }
  ),
  sender_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  content: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
});
