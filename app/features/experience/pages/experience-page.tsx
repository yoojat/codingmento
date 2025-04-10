import React from "react";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience | CodingMento" },
    { name: "description", content: "Learn about our teaching experience" },
  ];
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
          <p className="text-gray-600">
            Our instructors have years of experience in teaching programming and
            mentoring students.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Industry Experience</h2>
          <p className="text-gray-600">
            Our team comes from diverse backgrounds in software development and
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
