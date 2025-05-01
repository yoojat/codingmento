import { z } from "zod";
import type { Route } from "./+types/social-complete-page";
import { redirect } from "react-router";
import { makeSSRClient } from "~/supa-client";
const paramsSchema = z.object({
  provider: z.enum(["github", "kakao"]),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data } = paramsSchema.safeParse(params);
  if (!success) {
    return redirect("/auth/login");
  }
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!code) {
    return redirect("/auth/login");
  }
  const { client, headers } = makeSSRClient(request);
  console.log(code);
  const { error } = await client.auth.exchangeCodeForSession(code);
  if (error) {
    throw error;
  }
  return redirect("/", { headers });
};

export default function SocialCompletePage() {
  return <div></div>;
}
