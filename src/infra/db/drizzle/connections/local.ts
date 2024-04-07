import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../../../env";
import * as schema from "../schema";

export async function getLocalConnection() {
  const connection = postgres(env.DATABASE_URL);
  return drizzle(connection, { schema });
}
