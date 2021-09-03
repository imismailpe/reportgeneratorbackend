const { postgresqlClient } = require("../config")

const getBooks = (request, response) => {
    // postgresqlClient.connect();
    const QUERYSTR = 'SELECT * FROM books;';
    postgresqlClient.query(QUERYSTR,
        (err, results) => {
            if (err) throw err;
            response.status(200).json(results.rows);
            // postgresqlClient.end();
        });
}
const addBook = (request, response) => {
    // postgresqlClient.connect();
    const { author, title } = request.body;
    const QUERYSTR = 'INSERT INTO books (author, title) VALUES ($1, $2);';
    postgresqlClient.query(QUERYSTR,
        [author, title],
        (err) => {
            if (err) throw err;
            response.status(201).json({ status: 'success', message: 'Book added.' });
            // postgresqlClient.end();
        });
}
const deleteBook = (request, response) => {
    // postgresqlClient.connect();
    console.log(request.body)
    const { id } = request.body;
    const QUERYSTR = 'DELETE FROM books WHERE ID = ($1);';
    postgresqlClient.query(QUERYSTR,
        [id],
        (err) => {
            if (err) throw err;
            response.status(201).json({ status: 'success', message: 'Book deleted.' });
            // postgresqlClient.end();
        });
}
module.exports = { getBooks, addBook, deleteBook };