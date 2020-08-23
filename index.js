const express = require('express')
const app = express()
const request = require('request')
const path = require('path')
const dir = 'public/static/'
const PORT = 5000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public/static')))

app.get('/users', (req, res) => {
  const options = {
    metthod: 'GET',
    url:
      'https://gist.githubusercontent.com/yogski/a2219de98c1814a3dd79733b33a0aabb/raw/d8f14fbe41d083d6c5d120da67f770458d00b469/users.json',
  }

  request(options, (err, response, body) => {
    if (err) throw new Error(err)
    let usersJson = JSON.parse(body)
    usersJson.users.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })
    res.json(usersJson)
  })
})

app.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
})

app.get('/chapter4', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter4/index.html'))
})

app.get('*', (req, res) => {
  res.json({
    info: 'Please use these endpoints: /chapter3, /chapter4, /users',
  })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
