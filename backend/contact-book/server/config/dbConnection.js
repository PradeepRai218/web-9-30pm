const { MongoClient } = require('mongodb');
// Connection URL
let client=new MongoClient(`mongodb://127.0.0.1:27017`)
let dbConnection=async ()=>{
    await client.connect()
    let db= client.db(process.env.DBNAME)
    return db
}

module.exports={dbConnection}

