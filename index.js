// requiring express which is a dependency we installed with npm
const express = require('express')
// invoking express and assigning it to a varialbe called app
// we can call this variable anything but it is generally called app
const app = express()
// requiring our controller. this makes our code cleaner
const user_controller = require('./user_controller')



// RETURN ALL USERS ENDPOINT
// here we are saying any get request to the '/api/users' url will run the method on the user_controller called getUsers
app.get('/api/users', user_controller.getUsers)
// FIND USER BY ID ENDPOINT
// get request to the '/api/user/:id' url will run the user_controller.getUserByID method
app.get('/api/user/:id', user_controller.getUserByID)
// FIND USER BY NAME ENDPOINT
// get request to '/api/userName/:firstName' and execute the user_controller.getUserByFirstName method
app.get('/api/userName/:firstName', user_controller.getUserByFirstName)
// FIND USER BY EMAIL ENDPOINT
// get request to '/api/userEmail'. this one is look for a query param which we write in the url as "?key=value"
app.get('/api/userEmail', user_controller.getUserByEmail)

// set which port we want our server to run on. it can be between 3000 and 8888
const PORT = 3333
// have our server start up. this is like pressing the power button on a computer. it makes everything start. Once it starts up, it will run the console.log
app.listen(PORT, () => console.log(`listening on ${PORT}`))