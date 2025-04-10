import type { Route } from "./+types/home-page";

export function loader({ request }: Route["LoaderArgs"]) {
  return {
    title: "Welcome to CodingMento",
  };
}

export function action({ request }: Route["ActionArgs"]) {
  return {
    status: 200,
  };
}

export function meta({ data }: Route["MetaFunction"]) {
  return [
    { title: data.title },
    { name: "description", content: "Your coding mentorship platform" },
  ];
}

export default function HomePage({ loaderData }: Route["ComponentProps"]) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to CodingMento</h1>
      <p className="text-lg text-muted-foreground">
        Your platform for coding mentorship and learning.
      </p>
    </div>
  );
} 