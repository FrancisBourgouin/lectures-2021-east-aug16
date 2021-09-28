const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const client = require('./helpers/dbConnection')
client.connect()

const { fetchJokesAndAuthors } = require('./helpers/jokeHelpers')(client)
const { listAuthorsFromDB, addAuthorToDB, listSpecificAuthorFromDB } = require('./helpers/authorHelpers')(client)


// const prepareAuthorHelpers = require('./helpers/authorHelpers')
// const { listAuthorsFromDB, addAuthorToDB } = prepareAuthorHelpers(client)


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.post("/authors", (req, res) => {
  const { name, description, isFunny } = req.body

  addAuthorToDB([name, isFunny, description])
    .then(rows => res.json(rows))
})

app.get("/authors", (req, res) => {
  listAuthorsFromDB()
    .then(rows => {
      res.json(rows)
    })
})


app.get("/authors/:author_id", (req, res) => {
  // Extract the author id from req parameters  
  const { author_id } = req.params
  // give author id to the helper function called listSpecificAuthorFromDB
  listSpecificAuthorFromDB(author_id)
    // Once the query is completed, return json with value
    .then(author => res.json(author))
})

app.get("/jokes", (req, res) => {
  fetchJokesAndAuthors()
    .then(rows => {
      res.json(rows)
    })
})

module.exports = app;
