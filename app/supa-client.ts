import type { MergeDeep } from "type-fest";
import type { SetFieldType } from "type-fest";
import type { SetNonNullable } from "type-fest";
import type { Database as SupabaseDatabase } from "database.types";
import {
  createBrowserClient,
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";

export type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
        product_overview_view: {
          Row: SetNonNullable<
            SupabaseDatabase["public"]["Views"]["product_overview_view"]["Row"]
          >;
        };
        community_post_detail: {
          Row: SetNonNullable<
            SupabaseDatabase["public"]["Views"]["community_post_detail"]["Row"]
          >;
        };
        gpt_ideas_view: {
          Row: SetNonNullable<
            SupabaseDatabase["public"]["Views"]["gpt_ideas_view"]["Row"]
          >;
        };
      };
    };
  }
>;

export const browserClient = createBrowserClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const makeSSRClient = (request: Request) => {
  const headers = new Headers();
  const serverSideClient = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          const cookies = parseCookieHeader(
            request.headers.get("Cookie") ?? ""
          );
          const cookie = cookies.find((c) => c.name === name);
          return cookie?.value ?? null;
        },
        set(name, value, options) {
          headers.append(
            "Set-Cookie",
            serializeCookieHeader(name, value, options)
          );
        },
        remove(name, options) {
          headers.append(
            "Set-Cookie",
            serializeCookieHeader(name, "", { ...options, maxAge: 0 })
          );
        },
      },
    }
  );

  return {
    client: serverSideClient,
    headers,
  };
};
