const express = require('express');
const cors = require('cors');
const { PORT, postgresqlClient } = require('./config');
const { getBooks,getBookss } = require('./functions/functions');

postgresqlClient.connect();

const app = express();
const portNumber = process.env.PORT || PORT;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.set('port', portNumber)
app.get('/', (req, res) => res.send('welcome to reportgenerator backend api'));
app.get('/bookss', (req, res) => res.send(getBookss(req, res)));
app.route('/books').get(getBookss)

app.listen(portNumber,
    process.env.HOST || '::',
    info => console.log('running at ', app.get('port'), info));