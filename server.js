'use strict'

// https://www.djamseed.com/2016/03/30/building-restful-apis-with-express-and-mongodb/

const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3334
const path = require('path')
const express = require('express')
const app = express()
require('./configs/database')

app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
// register all routers
// all routes are prefixed with /api
app.use('/api', require('./routes/credit'))

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`))
