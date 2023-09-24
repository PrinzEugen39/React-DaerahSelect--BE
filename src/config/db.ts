import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

export default pool;