import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.CODINGMENTO_DATABASE_URL!, {
  prepare: false,
});

const db = drizzle(client, { logger: true });

export default db;
// const db2 = postgres(process.env.WEMAKE_DATABASE_URL!, { prepare: false });

// export const wemakeDb = drizzle(db2);
