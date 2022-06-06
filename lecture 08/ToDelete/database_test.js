// template to add to and retrieve documents from a MongoDB database
const { MongoClient } = require('mongodb')
const assert = require('assert')

const url = 'mongodb://localhost:27017' // connection URL

const client = new MongoClient(url) // mongodb client

const dbName = 'mydb' // database name

const collectionName = 'test' // collection name



// adapted from https://www.mongodb.com/docs/drivers/node/current/quick-start/
async function run () 
{

      await client.connect()
      console.log('Connected successfully to server')

      const db = client.db(dbName)

      const collection = db.collection(collectionName)

      const data = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ]


      // insert new documents in my collection
     //insertDocuments(collection, data)

     countRows (collection)

     // find documents and close the session
     findDocuments(collection, client)
  
}
run()

   
  


/* Definition of the different functions starting here */


// function to insert documents in the collection
// adapted from https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertMany/
const insertDocuments = async function (collection, data) 
{

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true }
    const result = await collection.insertMany(data, options)
    console.log(`${result.insertedCount} documents were inserted in the collection`)

}

// count the number of rows in a collection
// adapted from https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/
const countRows = async function(collection)
{
    const estimate = await collection.estimatedDocumentCount()
    console.log(`Estimated number of documents in the current collection: ${estimate}`)

}

// find all documents in a collection
// adapted from https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
const findDocuments = async function(collection, client) 
{
   const cursor =  collection.find({})

   const results = await cursor.toArray()
   
   if (results.length == 0)
   {

    console.log("No documents found!")

   }
   else
   {
    console.log(`Found ${results.length} documents in the collection...`);
    console.log(results)

   }

    /* // function to access the documents one by one
    await cursor.forEach((doc) =>
    {
        console.log(doc)

    })
    */

    // this is the last function in the chain of functions, so we close the client
    await client.close()

}

