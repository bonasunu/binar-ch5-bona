const express = require('express')
const app = express()
const path = require('path')
const routes = require('./controllers/routes')
const middleware = require('./utils/middleware')
const PORT = 5000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public/static')))
app.use('/', routes)
app.use(middleware)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
