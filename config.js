require('dotenv').config();
const { Client } = require('pg');

//pool for postgres db: postgresql-fluffy-32892
const postgresqlClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
//-----------
const PORT = 3000;
const isProduction = process.env.NODE_ENV === 'production';
const connectionString = isProduction ?
    process.env.DATABASE_URL
    : `postgresql://${process.env.DB_USER1}:${process.env.DB_PASSWORD1}@${process.env.DB_HOST1}:${process.env.DB_PORT1}/${process.env.DB_DATABASE1}`;
//pool for postgres db: postgresql-fluffy-32892
const { Pool } = require('pg');
const pool = new Pool({
    connectionString,
    ssl: isProduction
});
console.log("connectionString-", isProduction, connectionString)
module.exports = { PORT, pool, postgresqlClient };