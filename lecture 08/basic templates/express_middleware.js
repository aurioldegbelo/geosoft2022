// code adapted from https://expressjs.com/de/guide/writing-middleware.html

var express = require('express')
var app = express()
const port = 5000


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


app.get('/', function (req, res) 
{
  res.send('Hello World!')
})

app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})
