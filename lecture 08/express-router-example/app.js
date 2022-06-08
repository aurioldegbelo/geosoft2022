// The example is slightly adapted from https://expressjs.com/en/guide/routing.html
// The purpose of the example is to define and use a "birds-router" via a custom route 
const express = require('express')
const app = express()

const birds = require('./birds-router') // load "birds-router" and store it in a variable called "birds" for further reuse

const port = 3000 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => 
{
  res.send('hello world')
})

// use a router instance
app.use('/first_route_using_router', birds)

// use a router instance (we can use a rouer instance multiple times, i.e define several routes that point at the same instance)
app.use('/second_route_using_router', birds)


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

