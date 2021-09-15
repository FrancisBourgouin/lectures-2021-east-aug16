const prepareJokesHelpers = client => {

  const fetchJokesAndAuthors = () => {
    const potato = client
    return client
      .query("SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id")
      .then(result => result.rows)
  }

  return { fetchJokesAndAuthors }

}


module.exports = prepareJokesHelpers