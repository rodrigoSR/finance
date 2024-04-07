import { z } from "zod";

const NODE_ENV_VALUES = ["local", "dev", "prod"] as const;

const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
  PORT: z.string().regex(/^\d*$/).default("3000").transform(Number),
  NODE_ENV: z.enum(NODE_ENV_VALUES),
});

export const env = envSchema.parse(process.env);
