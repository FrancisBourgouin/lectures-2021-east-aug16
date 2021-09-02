const request = require("request")

request("http://localhost:3001/api/users", (err, res, body) => {
  const data = JSON.parse(body)
  console.log(data)

  console.log(`The secret of petit poulet is ${data['petit@poulet.com'].secret}`)
})