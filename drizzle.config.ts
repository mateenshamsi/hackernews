import {defineConfig} from "drizzle-kit";
import { d } from 'drizzle-kit/index-BAUrj6Ib';
export default defineConfig({
    dialect: "postgresql",
    schema:"src/db/schemas/*",
    out:"drizzle",
    dbCredentials:{
        url: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres",
        ssl: false,
    }
})