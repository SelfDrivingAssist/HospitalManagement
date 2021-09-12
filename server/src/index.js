const express = require('express')
const app = express()
const path = require('path')
const mainRoutes = require('./routes/main.js')
const doctorRoutes = require('./routes/doctorRoutes.js')
const patientRoutes = require('./routes/patientRoute.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', '..', 'web', 'views'))

app.use(express.static(path.join(__dirname, '..', '..', 'web', 'public')))
app.use('/', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRoutes)
app.use('/doctors', doctorRoutes)
app.use('/patient', patientRoutes)

app.listen(3000, () => {
  console.log('Server running @ http://localhost:3000/')
})
