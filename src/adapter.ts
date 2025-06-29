import { drizzle } from 'drizzle-orm/neon-http';
import { z } from 'zod';

// Validate environment variables
const EnvSchema = z.object({
    DATABASE_URL: z.string().url(),
});

const parsedEnv = EnvSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.format());
    throw new Error("Invalid environment variables");
}

// Use the validated DATABASE_URL
const db = drizzle(parsedEnv.data.DATABASE_URL);

const result = await db.execute("select 1 as one");
console.log(result);
