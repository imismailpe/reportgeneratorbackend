const express = require('express');
const cors = require('cors');
const { PORT, postgresqlClient } = require('./config');
const { getBooks, addBook, deleteBook } = require('./functions/functions');

postgresqlClient.connect();

const app = express();
const portNumber = process.env.PORT || PORT;
const router = express.Router();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.set('port', portNumber)
app.get('/', (req, res) => res.send('welcome to reportgenerator backend api'));
app.route('/books').get(getBooks);
app.route('/addbook').post(addBook);
// router.route('/deletebook/:id').delete(deleteBook);
app.route('/deletebook/:id').delete(deleteBook);
app.listen(portNumber,
    process.env.HOST || '::',
    info => console.log('running at ', app.get('port'), info));