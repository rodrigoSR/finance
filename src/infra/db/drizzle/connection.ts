import { env } from "../../../env";
import { getLocalConnection, getServerlessConnection } from "./connections";

type DRIZZLE_DB = Awaited<ReturnType<typeof getLocalConnection>> | ReturnType<typeof getServerlessConnection>;

let dizzleDB: DRIZZLE_DB;

if (env.NODE_ENV === "local") {
  dizzleDB = await getLocalConnection();
} else {
  dizzleDB = getServerlessConnection();
}

export const db = dizzleDB;
