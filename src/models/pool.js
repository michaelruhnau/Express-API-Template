import { Pool } from 'pg';
import dotenv from 'dotenv';
import { connectionString } from '../settings';

dotenv.config();
console.log(connectionString);
export const pool = new Pool({ connectionString });