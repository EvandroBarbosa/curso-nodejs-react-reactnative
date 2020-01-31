const express = require('express')
const app = express()

app.use(express.json())

//Middlewares global
app.use((req, res, next) => {
  console.time('Request')

  console.log(`Método: ${req.method}, URL ${req.url}`)

  next()

  console.timeEnd('Request')
})

//Middlewares Local
function checkUserExists(req, res, next) {
  if(!req.body.nome){
    return res.status(400).send({error: 'User name is required'})
  }

  next()
}

function checkIndexInArray(req, res, next) {
  const user = users[req.params.index]
  if(!user) {
    return res.status(404).send({error : 'User does not exists'})
  }

  req.user = user

  next()
}

const users = ['Evandro', 'Valdo', 'Vanessa']

app.get('/', (req, res, next) => {
   res.status(200).send({
    title: 'API NodeJs 1.0.0'
  })
})

app.get('/users', (req, res, next) => {
  res.send(users)
})

app.get('/users/:index',checkIndexInArray, (req, res, next) => {
  
 return res.send(req.user)
})

app.post('/users', checkUserExists, (req, res, next) => {
  const {nome} = req.body
  users.push(nome)
  res.status(201).send()
})

app.put('/users/:index', checkUserExists, checkIndexInArray, (req, res, next) => {
  let { index } = req.params
  let { nome } = req.body

  users[index] = nome
  res.status(200).send(users)
})

app.delete('/users/:index', checkIndexInArray, (req, res ) => {
  let { index } = req.params

  users.splice(index, 1)
  res.status(204).send()
})
app.listen(3000, console.log('Servidor ON'))