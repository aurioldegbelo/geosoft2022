// the example is slightly adapted from https://expressjs.com/en/guide/routing.html
// The purpose of the example is to define a birds Router
const express = require('express')
const app = express()
const birds = require('./birds')

const port = 3000 // unsafe ports: https://superuser.com/questions/188058/which-ports-are-considered-unsafe-by-chrome 


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/birds', birds)



app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

