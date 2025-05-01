import { Button } from "~/common/components/ui/button";
import { Form, Link, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { z } from "zod";
import { checkUsernameExists } from "../queries";
import { makeSSRClient } from "~/supa-client";
import { LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return {
      formErrors: error.flatten().fieldErrors,
    };
  }
  const userNameExists = await checkUsernameExists(request, {
    username: data.username,
  });
  if (userNameExists) {
    return { formErrors: { username: ["Username already exists"] } };
  }
  const { client, headers } = makeSSRClient(request);
  const { error: signUpError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
        username: data.username,
      },
    },
  });
  if (signUpError) {
    return { formErrors: { email: [signUpError.message] } };
  }
  return redirect("/", { headers });
};
export default function JoinPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute right-8 top-8 ">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <Form className="w-full space-y-4" method="post">
          <InputPair
            label="Name"
            description="Enter your name"
            name="name"
            id="name"
            required
            type="text"
            placeholder="Enter your name"
          />

          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData?.formErrors?.name}</p>
          )}

          <InputPair
            id="username"
            label="Username"
            description="Enter your username"
            name="username"
            required
            type="text"
            placeholder="i.e wemake"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData?.formErrors?.username}</p>
          )}
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData?.formErrors?.email}</p>
          )}
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />

          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData?.formErrors?.password}</p>
          )}
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Create account"
            )}
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
