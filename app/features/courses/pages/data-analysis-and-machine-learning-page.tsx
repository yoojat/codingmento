import type { Route } from "../../../+types/features/courses/pages/data-analysis-and-machine-learning-page";

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptor[] {
  return [
    {
      name: "title",
      content: "Data Analysis & Machine Learning | CodingMento",
    },
    {
      name: "description",
      content: "Master data analysis and machine learning with Python",
    },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    course: {}, // Add course fetch logic
  };
}

export default function DataAnalysisAndMachineLearningPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Data Analysis & Machine Learning Course
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Learn how to analyze data and build machine learning models using
          Python.
        </p>
        {/* Course content will be added here */}
      </div>
    </div>
  );
}
