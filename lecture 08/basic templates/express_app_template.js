const express = require('express')
//const path = require('path')

const app = express()
const port = 3000 // unsafe ports: https://superuser.com/questions/188058/which-ports-are-considered-unsafe-by-chrome 


/* // Middleware
var myLogger = function (req, res, next) 
{
  console.log('LOGGED')
  next()
}

var mySecondLogger = function (req, res, next) 
{
  console.log('SECOND LOGGING')
  next()
}

app.use(mySecondLogger)
app.use(myLogger)

*/

// function taken from https://expressjs.com/de/starter/hello-world.html
// route
app.get('/', (req, res) => 
{
  res.send('Hello World!')
})

// function taken from https://expressjs.com/de/starter/static-files.html 
// static
app.use(express.static('public'))
//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))

console.log(__dirname)
console.log(path.join(__dirname, 'public'))


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

