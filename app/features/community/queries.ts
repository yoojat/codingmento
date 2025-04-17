// import db from "~/db";
// import { topics, posts, profiles, postUpvotes } from "./schema";
// import { eq, asc, count } from "drizzle-orm";

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

export const getPosts = async () => {
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
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const { data, error } = await client
    .from("community_post_list_view")
    .select(`*`);
  if (error) throw new Error(error.message);
  return data;
};
