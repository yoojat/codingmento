import { ChevronUp, ChevronUpIcon, StarIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-overview-page";

export function meta() {
  return [
    { title: "Product Overview | wemake" },
    { name: "description", content: "View product details and information" },
  ];
}

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}
