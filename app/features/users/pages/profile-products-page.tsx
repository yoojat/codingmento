import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";
import { useLoaderData } from "react-router";
import { getUserProducts } from "../queries";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Products | wemake" }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const products = await getUserProducts(params.username);
  return { products };
};

export default function ProfileProductsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.products.map((product, index) => (
        <ProductCard
          key={`productId-${index}`}
          id={`productId-${index}`}
          name={product.name}
          description={product.tagline}
          reviewsCount={product.reviews}
          viewsCount={product.views}
          votesCount={product.upvotes}
        />
      ))}
    </div>
  );
}
