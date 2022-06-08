const express = require('express')
//const path = require('path')

const app = express()
const port = 3000 // unsafe ports: https://superuser.com/questions/188058/which-ports-are-considered-unsafe-by-chrome 

// function taken from https://expressjs.com/de/starter/hello-world.html
app.get('/', (req, res) => 
{
  res.send('Hello World!')
})

// function taken from https://expressjs.com/de/starter/static-files.html 
app.use(express.static('public'))
//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

