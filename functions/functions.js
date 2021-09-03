const { postgresqlClient } = require("../config")

const getBooks = (request, response) => {
    const QUERYSTR = 'SELECT * FROM books;';
    postgresqlClient.query(QUERYSTR,
        (err, results) => {
            if (err) throw err;
            response.status(200).json(results.rows);
            postgresqlClient.end();
        });
}
const addBook = (request, response) => {
    const { author, title } = request.body;
    const QUERYSTR = 'INSERT INTO books (author, title) VALUES ($1, $2);';
    postgresqlClient.query(QUERYSTR,
        [author, title],
        (err) => {
            if (err) throw err;
            response.status(201).json({ status: 'success', message: 'Book added.' });
            postgresqlClient.end();
        });
}
module.exports = { getBooks, addBook };