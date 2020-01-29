const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  return res.status(200).send({
    title: 'API NodeJs 1.0.0'
  })
})

app.listen(3000, console.log('Servidor ON'))