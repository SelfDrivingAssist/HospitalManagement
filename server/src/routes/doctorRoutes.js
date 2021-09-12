const express = require('express')
const router = express.Router()

const connection = require('../sqlConnector')

router.get('/dashboard', (req, res) => {
  res.render('./pages/doctordash')
})

module.exports = router
