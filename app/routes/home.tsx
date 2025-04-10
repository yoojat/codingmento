import { Button } from "~/common/components/ui/button";
import type { MetaFunction, MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h1>Home <Button>Click me</Button></h1>
}
