import Elysia from "elysia";
import { env } from "./env";

const app = new Elysia();
app
  .get("/", () => "Hello WOrld!")
  .listen(env.PORT, () => {
    console.log(`running on port ${env.PORT}`);
  });
