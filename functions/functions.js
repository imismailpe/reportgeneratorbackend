const { pool } = require("../config")

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

module.exports = { getBooks };