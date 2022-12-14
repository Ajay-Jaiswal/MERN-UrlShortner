const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const route = require("./routes/route")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

mongoose.connect("mongodb+srv://jayvision:KQK8eFQqxCASWGRF@cluster0.6lmc5.mongodb.net/group60Database", 
{useNewUrlParser: true})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use("/", route)

app.listen(process.env.PORT || 4000, (err)=> {
    console.log("Connected to PORT 3000")
})