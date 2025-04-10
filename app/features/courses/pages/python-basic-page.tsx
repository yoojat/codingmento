import type { Route } from "../../../+types/features/courses/pages/python-basic-page";

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptor[] {
  return [
    { name: "title", content: "Python Basic | CodingMento" },
    { name: "description", content: "Learn Python programming from scratch" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    course: {}, // Add course fetch logic
  };
}

export default function PythonBasicPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Python Basic Course</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Start your programming journey with Python. This course covers the
          fundamentals of Python programming.
        </p>
        {/* Course content will be added here */}
      </div>
    </div>
  );
}
