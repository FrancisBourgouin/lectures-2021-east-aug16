const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const { authenticateUser } = require('./helpers/authenticationHelpers')
const bcrypt = require('bcrypt')
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ['encryptinkeysomethingsomething', 'encryptinkeysomethingsomethingwiggle']
}))



const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);

const user1Password = bcrypt.hashSync("pockpock", salt);
const user2Password = bcrypt.hashSync("hydrogen", salt);

console.log(user1Password, user2Password)
// REQUEST COME IN

const user1 = {
  id: 1,
  email: "petit@poulet.com",
  name: "Francis",
  password: user1Password,
  secret: "I have a hard time with cookies (eating cookies)"
}

const user2 = {
  id: 2,
  email: "periodic@table.com",
  name: "Dimitri Ivanovich Mendeleiv",
  password: user2Password,
  secret: "I wish I was a soccer player"
}

const userDatabaseIsh = [user1, user2]

const userDatabaseIshObj = {
  "petit@poulet.com": user1,
  "periodic@table.com": user2
}

const isValidUser = (email, userDB) => {
  const currentUser = userDB[email]

  return currentUser
}

app.use((req, res, next) => {
  const email = req.session.email
  const coolPaths = ["/", "/login", "/api/users"]
  console.log(req.path)
  if (coolPaths.includes(req.path) || isValidUser(email, userDatabaseIshObj)) {
    return next()
  }
  res.redirect('/')
})


app.get("/", (req, res) => {
  res.render("index")
})



app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const userResult = authenticateUser(email, password, userDatabaseIshObj)

  if (userResult.error) {
    console.log(userResult.error)
    return res.redirect('/')
  }

  req.session.email = email
  req.session.name = userResult.user.name
  return res.redirect('/vault')
})



app.post("/oldlogin", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = userDatabaseIshObj[email]

  // if (user && user.password === password) {
  if (user && bcrypt.compareSync(password, user.password)) {
    // res.cookie('email', email)
    req.session.email = email
    req.session.name = user.name
    return res.redirect('/vault')
  }

  return res.redirect('/')
})




app.get("/vault", (req, res) => {
  // const email = req.cookies.email
  const email = req.session.email
  const currentUser = userDatabaseIshObj[email]

  if (!isValidUser(email, userDatabaseIshObj)) {
    return res.redirect("/")
  }

  const templateVars = {
    name: currentUser.name,
    email: currentUser.email,
    secret: currentUser.secret
  }

  res.render('vault', templateVars)

})

app.get('/api/users', (req, res) => {
  res.json(userDatabaseIshObj)
})


module.exports = app;
