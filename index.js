const express = require('express')
const app = express()
const path = require('path')
const dir = 'public/static/'

app.use(express.json())

app.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
})

app.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
})

app.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})
