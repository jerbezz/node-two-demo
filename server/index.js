// DEPENDENCIES
const express = require('express')
const app = express()
const uc = require('./controllers/user_controller')

//ENDPOINTS
app.get('/api/users', uc.getUsers)
app.get('/api/user/:id', uc.getUserByID)

const PORT = 3333
app.listen(PORT, () => console.log(`magic is happening on ${PORT} 💋`))