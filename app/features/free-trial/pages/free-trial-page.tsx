import React from "react";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Free Trial | CodingMento" },
    { name: "description", content: "Start your free trial with CodingMento" },
  ];
};

export default function FreeTrialPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Start Your Free Trial
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium mb-1">
              Select Course
            </label>
            <select
              id="course"
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="">Choose a course</option>
              <option value="python-basic">Python Basic</option>
              <option value="python-intermediate">Python Intermediate</option>
              <option value="data-analysis">
                Data Analysis & Machine Learning
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
