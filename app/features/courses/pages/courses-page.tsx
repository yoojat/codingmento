import type { Route } from "../../../+types/features/courses/pages/courses-page";

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptor[] {
  return [
    { name: "title", content: "Courses | CodingMento" },
    {
      name: "description",
      content: "Browse our collection of programming courses",
    },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    courses: [], // Add courses fetch logic
  };
}

export default function CoursesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards will be added here */}
      </div>
    </div>
  );
}
