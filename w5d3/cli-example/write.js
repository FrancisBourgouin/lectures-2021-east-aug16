const { Client, Pool } = require('pg')
const client = new Client({
  user: 'francis',
  password: 'francis',
  host: 'localhost',
  database: 'jokes',
  port: 5432,
})

client.connect()


// id |  name   | funny |       description       
// ----+---------+-------+-------------------------
//   1 | Francis | t     | Oh boy, he is a teacher

const values = process.argv.slice(2)
console.log(values)

// client
//   .query(`INSERT INTO authors (name, funny, description) VALUES ('${values[0]}', ${values[1]},'${values[2]}') RETURNING *`)
//   .then(result => console.log(result))


// client
//   .query(`INSERT INTO authors (name, funny, description) VALUES ('$1', $2},'$3') RETURNING *`, [values[0], values[1], values[2]])
//   .then(result => console.log(result))

const addAuthorToDB = (client, values) => {
  return client
    .query(`INSERT INTO authors (name, funny, description) VALUES ($1, $2, $3) RETURNING *`, [values[0], values[1], values[2]])
    .then(result => console.log(result))
    .then(() => client.end())
}

addAuthorToDB(client, values)