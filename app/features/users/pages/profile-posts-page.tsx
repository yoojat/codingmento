import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";
import { getUserPosts } from "../queries";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const posts = await getUserPosts(params.username);
  return { posts };
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.posts.map((post, index) => (
        <PostCard
          key={post.post_id}
          id={post.post_id}
          title={post.title}
          author={post.author}
          authorAvatarUrl={post.author_avatar}
          category={post.topic}
          postedAt={post.created_at}
          expanded
        />
      ))}
    </div>
  );
}
