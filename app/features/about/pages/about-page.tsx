import React from "react";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "About | CodingMento" },
    { name: "description", content: "Learn more about CodingMento" },
  ];
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About CodingMento</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          CodingMento is dedicated to helping aspiring programmers achieve their
          goals through quality education and mentorship.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            We believe in making programming education accessible and effective
            for everyone.
          </p>
        </section>
      </div>
    </div>
  );
}
