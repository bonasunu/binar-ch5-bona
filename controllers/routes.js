const route = require('express').Router()
const axios = require('axios')
const path = require('path')
const dir = '../public/static/'
const url =
  'https://gist.githubusercontent.com/yogski/a2219de98c1814a3dd79733b33a0aabb/raw/d8f14fbe41d083d6c5d120da67f770458d00b469/users.json'

// ascending sorting function for users
const usersSorting = (arr) => {
  arr.users.sort((a, b) => {
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
  return arr
}

// Users route
route.get('/users', (req, res) => {
  axios({
    method: 'GET',
    url: url,
  }).then((response) => {
    let usersJson = usersSorting(response.data)
    res.json(usersJson)
  })
})

// Chapter 3 Route
route.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
})

// Chapter 4 Route
route.get('/chapter4', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter4/index.html'))
})

// Handle unkown endpoints
route.get('*', (req, res) => {
  res.json({
    info: 'Please use these endpoints: /chapter3, /chapter4, /users',
  })
})

module.exports = route
