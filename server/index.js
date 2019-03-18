// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const uc = require('./controllers/user_controller')

// TOP LEVEL MIDDELWARE
app.use(bodyParser.json())

//ENDPOINTS
app.get('/api/users', uc.getUsers)
app.get('/api/user/:id', uc.getUserByID)
app.post('/api/user', uc.createUser)
app.put('/api/user/:id', uc.editUser)

const PORT = 3333
app.listen(PORT, () => console.log(`magic is happening on ${PORT} 💋`))