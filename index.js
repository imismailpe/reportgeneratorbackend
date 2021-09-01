const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');

const app = express();
const portNumber = process.env.PORT || PORT;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.set('port', portNumber)
app.get('/', (req, res) => res.send('welcome to reportgenerator backend api'));

app.listen(portNumber,
    process.env.HOST || '::',
    info => console.log('running at ', app.get('port'), info));