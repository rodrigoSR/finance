import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../../../env";
import * as schema from "../schema";

export function getServerlessConnection() {
  const connection = neon(env.DATABASE_URL);
  return drizzle(connection, { schema });
}
