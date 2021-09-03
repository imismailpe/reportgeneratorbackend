const { pool, postgresqlClient } = require("../config")



const getBookss = (request, response) => {
    postgresqlClient.query('SELECT * FROM books;', 
    (err, results) => {
        if (err) throw err;
        response.status(200).json(results.rows);
        postgresqlClient.end();
      });
}
const getBooks = (request, response) => {
    pool.query(
        'SELECT * FROM books;',
        (error, results) => {
            if(error){
                console.log(error);
                throw error
            }
            response.status(200).json(results.rows);
        }
    )
}

module.exports = { getBooks,getBookss };