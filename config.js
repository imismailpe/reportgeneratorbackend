require('dotenv').config();
const { Client, Pool } = require('pg');

//client for postgres db: postgresql-fluffy-32892
const postgresqlClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
//-----------
const PORT = 3000;
// `postgresql://${process.env.DB_USER1}:${process.env.DB_PASSWORD1}@${process.env.DB_HOST1}:${process.env.DB_PORT1}/${process.env.DB_DATABASE1}`;
//pool for postgres db: postgresql-fluffy-32892
const postgresqlPool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
});
module.exports = { PORT, postgresqlPool, postgresqlClient };