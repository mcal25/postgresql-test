import pg from 'pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// UPDATE: They should load from the env file now :)
export const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.DATABASE,
  password: process.PASSWORD,
  port: process.env.PORT
});