import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";

const db = postgres(process.env.CODINGMENTO_DATABASE_URL!, { prepare: false });

export const codingmentoDb = drizzle(db);

// const db2 = postgres(process.env.WEMAKE_DATABASE_URL!, { prepare: false });

// export const wemakeDb = drizzle(db2);
