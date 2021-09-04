const { postgresqlPool } = require("../config");

const getBooks = (request, response) => {
    // postgresqlClient.connect();
    const QUERYSTR = 'SELECT * FROM books;';
    postgresqlPool.query(QUERYSTR,
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
    postgresqlPool.query(QUERYSTR,
        [author, title],
        (err) => {
            if (err) throw err;
            response.status(201).json({ status: 'success', message: 'Book added.' });
            // postgresqlClient.end();
        });
}
const deleteBook = (request, response) => {
    // postgresqlClient.connect();
    const id = request.params.id;
    console.log(request.params)
    const QUERYSTR = `DELETE FROM books WHERE ID = ${id};`;
    postgresqlPool.query(QUERYSTR,
        (err) => {
            if (err) throw err;
            response.status(201).json({ status: 'success', message: 'Book deleted.' });
            // postgresqlClient.end();
        });
}
module.exports = { getBooks, addBook, deleteBook };