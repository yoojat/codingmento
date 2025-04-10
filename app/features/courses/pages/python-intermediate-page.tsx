import type { Route } from "../../../+types/features/courses/pages/python-intermediate-page";

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptor[] {
  return [
    { name: "title", content: "Python Intermediate | CodingMento" },
    { name: "description", content: "Advance your Python programming skills" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    course: {}, // Add course fetch logic
  };
}

export default function PythonIntermediatePage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Python Intermediate Course</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Take your Python skills to the next level with advanced concepts and
          best practices.
        </p>
        {/* Course content will be added here */}
      </div>
    </div>
  );
}
