import React from "react";
import { Link, type MetaFunction } from "react-router";
import { ProductCard } from "../../features/products/components/product-card";
import { Button } from "../components/ui/button";
import { PostCard } from "../components/post-card";
import { IdeaCard } from "../components/idea-card";
import { JobCard } from "../components/job-card";
import { TeamCard } from "../components/team-card";
import type { Route } from "./+types/home-page";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CodingMento</h1>
      <p className="text-lg mb-4">
        Your journey to becoming a better programmer starts here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your content sections here */}
      </div>
    </div>
  );
}
