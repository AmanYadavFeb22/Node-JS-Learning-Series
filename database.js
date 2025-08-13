let ConString ="mongodb+srv://AmanYadav:ErckeJKGrQgRFlZe@cluster0.mjqftem.mongodb.net/";

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url ="mongodb+srv://AmanYadav:ErckeJKGrQgRFlZe@cluster0.mjqftem.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "UserData";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Users");

  const data={
    firstName:"Aditya",
    LastName:"Yadav",
    Country: 'India',
    Contact: '1238767890',
    Hobby: 'Playing'

  }

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

    const CountResult = await collection.countDocuments();
  console.log('Inserted documents =>', CountResult);




  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
