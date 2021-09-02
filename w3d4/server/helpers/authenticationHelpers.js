const bcrypt = require('bcrypt')


const authenticateUser = (email, password, userDB) => {
  const user = userDB[email]
  const suppliedPassword = password

  if (user) {

    const hashedPassword = user.password

    if (bcrypt.compareSync(suppliedPassword, hashedPassword)) {
      return { user, error: null }
    }
    return { user: null, error: "bad password" }
  }
  return { user: null, error: "bad email" }
}

module.exports = { authenticateUser }