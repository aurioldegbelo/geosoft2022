
const express = require('express')
const { MongoClient } = require('mongodb')
const mongodbOptions = {
  useUnifiedTopology: true
}

const app = express() // create express app
const port = 3000

//const url = 'mongodb://localhost:27017' // connection URL (mongodb localhost)
const url = 'mongodb://mongo:27017' // connection URL (mongodb docker container)

const client = new MongoClient(url, mongodbOptions) // mongodb client
const dbName = 'mydb' // database name
const collectionName = 'test' // collection name


// first route
app.get('/', (req, res) => 
{
    res.send ("Welcome to our page")
})

// second route
app.get('/insert', async (req, res) => 
{

    // Some data
  const data = [
      { name: 'Mary', address: 'Beststreet 1, Münster'},
      { name: 'Max', address: 'Beautifulstreet 4, Münster'},
      { name: 'Peter', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'}
  ]

  addDocumentsToDB(client, dbName, collectionName, data)
  .then(console.log)
  .catch(console.error)
  .finally(() => setTimeout(() => {client.close()}, 1500)) // close the database after 1,5 seconds

  res.send("Some data has been added to the database")

})


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})


/* Template to add to and retrieve documents from a MongoDB database
   The template is adapted from https://www.mongodb.com/docs/drivers/node/current/quick-start/ and 
   https://www.npmjs.com/package/mongodb 
 */
async function addDocumentsToDB (client, dbName, collectionName, data) 
{

    await client.connect()
    console.log('Connected successfully to database')

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const options = { ordered: true }
    const result = await collection.insertMany(data, options)
    console.log(`${result.insertedCount} documents were inserted in the collection`)

}

