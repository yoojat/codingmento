import React from "react";
import { Link } from "react-router";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Courses | CodingMento" },
    { name: "description", content: "Browse our programming courses" },
  ];
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/courses/python-basic" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Python Basic</h2>
            <p className="text-gray-600 mb-4">
              Learn the fundamentals of Python programming language.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Learn More →
            </button>
          </div>
        </Link>
        <Link to="/courses/python-intermediate" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Python Intermediate</h2>
            <p className="text-gray-600 mb-4">
              Take your Python skills to the next level.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Learn More →
            </button>
          </div>
        </Link>
        <Link
          to="/courses/data-analysis-and-machine-learning"
          className="block"
        >
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Data Analysis & ML</h2>
            <p className="text-gray-600 mb-4">
              Master data analysis and machine learning with Python.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Learn More →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
