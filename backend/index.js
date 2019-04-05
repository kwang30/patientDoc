var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
app.use(cors())
app.use(bodyParser.json());

var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use( bodyParser.urlencoded({ extended: false }))

const mongoURI = 'mongodb://localhost:27017/mernloginreg'

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))


var routes = require('./routes')
app.use('/api', routes)

app.listen(port, () => { console.log("Server is running on port: " + port)})
