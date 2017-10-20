// models/credit.js

'use strict'

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const schema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  code: String,
  credit_data: Array
})

module.exports = mongoose.model('credits', schema)
