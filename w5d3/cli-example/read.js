const { Client, Pool } = require('pg')
const client = new Client({
  user: 'francis',
  password: 'francis',
  host: 'localhost',
  database: 'jokes',
  port: 5432,
})

client.connect()

// {
//   id: 6,
//   question: 'Did you hear about the monkeys who shared an Amazon account?',
//   answer: 'They were Prime mates.',
//   rating: 4,
//   author_id: 6,
//   name: 'Anton',
//   funny: true,
//   description: 'A student in july 19'
// }
const makeAFancyRow = row => {
  console.log("🛶-----------------------🛶")
  console.log(`Question: ${row.question}`)
  console.log(`Answer: ${row.answer}`)
  console.log(`Provided by ${row.name}`)
  console.log(`Joke id #${row.joke_id}`)

  return row
}

const makeABunchOfFancyRows = rows => {
  weirdRowThing = rows
  rows.forEach(makeAFancyRow)
}

const endConnection = (client) => client.end()

const fetchJokesAndAuthors = client => {
  const potato = client
  return client
    .query("SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id")
    .then(result => result.rows)
}

let weirdRowThing

client
  .query("SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id")
  .then(result => result.rows)
  .then(rows => rows.forEach(makeAFancyRow))
  .then(() => client.end())

fetchJokesAndAuthors(client)
  .then(makeABunchOfFancyRows)
  .then(() => endConnection(client))
  // .then(() => fetchJokesAndAuthors(client))
