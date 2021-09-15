const prepareAuthorHelpers = client => {

  const addAuthorToDB = (values) => {
    return client
      .query(`INSERT INTO authors (name, funny, description) VALUES ($1, $2, $3) RETURNING *`, [values[0], values[1], values[2]])
      .then(result => result.rows)
  }

  const listAuthorsFromDB = () => {
    return client
      .query(`SELECT * FROM authors`)
      .then(result => result.rows)
  }

  const listSpecificAuthorFromDB = (authorId) => {
    // Query the authors table where authors.id is authorId
    return client
      .query("SELECT * FROM authors WHERE id = $1", [authorId])
      // Then, extract the rows
      .then(result => result.rows)
      // Then extract the object from the array and return the value
      .then(rows => rows[0])
  }

  return { addAuthorToDB, listAuthorsFromDB, listSpecificAuthorFromDB }
}



module.exports = prepareAuthorHelpers