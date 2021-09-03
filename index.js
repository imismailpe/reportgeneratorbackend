const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');
const { Client } = require('pg');
const { getBooks } = require('./functions/functions');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
const app = express();
const portNumber = process.env.PORT || PORT;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.set('port', portNumber)
app.get('/', (req, res) => res.send('welcome to reportgenerator backend api'));
// app.get('/books', (req, res) => res.send(getBooks(req, res)));
app.route('/books').get(getBooks)

app.listen(portNumber,
    process.env.HOST || '::',
    info => console.log('running at ', app.get('port'), info));