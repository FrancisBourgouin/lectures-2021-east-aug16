const { Client, Pool } = require('pg')
const client = new Client({
  user: 'francis',
  password: 'francis',
  host: 'localhost',
  database: 'jokes',
  port: 5432,
})

module.exports = client