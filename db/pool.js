import { Pool } from 'pg';

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export const pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "cc",
  database: "top_users",
  password: "DankDBPW",
  port: 5432 // The default port
});