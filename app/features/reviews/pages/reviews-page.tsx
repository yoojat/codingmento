import React from "react";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Reviews | CodingMento" },
    { name: "description", content: "Read reviews from our students" },
  ];
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Student Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
          </div>
          <p className="text-gray-600 mb-4">
            "The instructors are amazing and very patient. I learned so much in
            a short time!"
          </p>
          <p className="font-semibold">- John Doe</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
          </div>
          <p className="text-gray-600 mb-4">
            "The course materials are well-structured and easy to follow. Highly
            recommended!"
          </p>
          <p className="font-semibold">- Jane Smith</p>
        </div>
      </div>
    </div>
  );
}
