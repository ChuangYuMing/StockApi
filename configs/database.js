// configs/database.js

'use strict'

// dependencies
const mongoose = require('mongoose')

// set the database name
const dbName = 'finance'

// connect to the database
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useMongoClient: true
})

// get notified if the connection
// was successful or not
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`)
})
