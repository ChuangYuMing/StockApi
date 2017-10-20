// routes/credit.js

'use strict'

const mongoose = require('mongoose')
const express = require('express')
const Credit = require('../models/credit')
const router = express.Router()

router.route('/credit').post((req, res) => {
  const credit = new Credit({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    code: req.body.code
  })

  credit.save(err => {
    if (err) {
      return res.send(err)
    }
    console.log(req.body)
    return res.json({ message: 'New credit created!' })
  })
})

router.route('/credit/:id').get((req, res) => {
  Credit.findOne({ code: req.params.id }, (err, task) => {
    if (err) {
      return res.send(err)
    }
    return res.json(task)
  })
})
module.exports = router
