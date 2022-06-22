conn = new Mongo();
db = conn.getDB("MyDatabaseName") // See https://www.mongodb.com/docs/manual/reference/method/Mongo.getDB/

// See https://www.mongodb.com/docs/manual/reference/method/js-collection/
db.myCollectionName.insertOne({ "address": { "city": "Paris", "zip": "123" }, "name": "Mike", "phone": "1234" });
db.myCollectionName.insertOne({ "address": { "city": "Marsel", "zip": "321" }, "name": "Helga", "phone": "4321" });

// The example is adapted from https://stackoverflow.com/a/67206565 