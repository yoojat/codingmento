// import db from "~/db";
// import { topics, posts, profiles, postUpvotes } from "./schema";
// import { eq, asc, count } from "drizzle-orm";

import { DateTime } from "luxon";
import client from "~/supa-client";

// export const getTopics = async () => {
//   const allTopics = await db
//     .select({
//       name: topics.name,
//       slug: topics.slug,
//     })
//     .from(topics);
//   return allTopics;
// };

// export const getPosts = async () => {
//   const allPosts = await db
//     .select({
//       id: posts.post_id,
//       title: posts.title,
//       createdAt: posts.created_at,
//       topic: topics.name,
//       author: profiles.name,
//       authorAvatarUrl: profiles.avatar,
//       username: profiles.username,
//       upvotes: count(postUpvotes.post_id),
//     })
//     .from(posts)
//     .innerJoin(topics, eq(posts.topic_id, topics.topic_id))
//     .innerJoin(profiles, eq(posts.profile_id, profiles.profile_id))
//     .leftJoin(postUpvotes, eq(posts.post_id, postUpvotes.post_id))
//     .groupBy(
//       posts.post_id,
//       profiles.name,
//       profiles.avatar,
//       profiles.username,
//       topics.name
//     )
//     .orderBy(asc(posts.post_id));
//   return allPosts;
// };

export const getTopics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const { data, error } = await client.from("topics").select("name, slug");
  if (error) throw new Error(error.message);
  return data;
};

export const getPosts = async ({
  limit,
  sorting,
  period = "all",
  keyword,
  topic,
}: {
  limit: number;
  sorting: "newest" | "popular";
  period?: "all" | "today" | "week" | "month" | "year";
  keyword?: string;
  topic?: string;
}) => {
  //   const { data, error } = await client.from("posts").select(`
  //     post_id,
  //     title,
  //     created_at,
  //     topic:topics!inner (
  //       name
  //     ),
  //     author:profiles!posts_profile_id_profiles_profile_id_fk!inner (
  //       name,
  //       username,
  //       avatar
  //     ),
  //     upvotes:post_upvotes (
  //       count
  //     )
  // `);
  // 모든 데이터를 가지고옴
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  // const { data, error } = await client
  //   .from("community_post_list_view")
  //   .select(`*`);
  // if (error) throw new Error(error.message);
  // return data;

  const baseQuery = client
    .from("community_post_list_view")
    .select(`*`)
    .limit(limit);

  if (sorting === "newest") {
    baseQuery.order("created_at", { ascending: false });
  } else if (sorting === "popular") {
    if (period === "all") {
      baseQuery.order("upvotes", { ascending: false });
    } else {
      const today = DateTime.now();
      if (period == "today") {
        baseQuery.gte("created_at", today.startOf("day").toISO());
      } else if (period == "week") {
        baseQuery.gte("created_at", today.startOf("week").toISO());
      } else if (period == "month") {
        baseQuery.gte("created_at", today.startOf("month").toISO());
      } else if (period == "year") {
        baseQuery.gte("created_at", today.startOf("year").toISO());
      }
    }
    baseQuery.order("upvotes", { ascending: false });
  }

  if (keyword) {
    baseQuery.ilike("title", `%${keyword}%`);
  }

  if (topic) {
    baseQuery.eq("topic_slug", topic);
  }

  const { data, error } = await baseQuery;
  if (error) throw new Error(error.message);
  return data;
};
