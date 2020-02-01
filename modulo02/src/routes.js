const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({message: 'Hello Wolrd!'})
})

module.exports = routes