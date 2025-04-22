import { Button } from "~/common/components/ui/button";
import { ReviewCard } from "../components/review-card";
import { getReviews } from "../queries";
import type { Route } from "./+types/product-reviews-page";
import { useLoaderData, useOutletContext } from "react-router";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const reviews = await getReviews(params.productId);
  return { reviews };
};

export default function ProductReviewsPage({
  loaderData,
}: Route.ComponentProps) {
  const { review_count } = useOutletContext<{ review_count: string }>();
  return (
    <div className="space-y-10 max-w-xl">
      <div className="flex justify-between items-center">
        {review_count} {review_count === "1" ? "Review" : "Reviews"}
        <Button variant={"secondary"}>Write a review</Button>
      </div>
      <div className="space-y-20">
        {loaderData.reviews.map((review) => (
          <ReviewCard
            key={review.review_id}
            username={review.user.name}
            handle={review.user.username}
            avatarUrl={review.user.avatar}
            rating={review.rating}
            content={review.review}
            postedAt={review.created_at}
          />
        ))}
      </div>
    </div>
  );
}
