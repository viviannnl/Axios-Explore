const express = require('express')
const port = 5000
const connectDB = require('./config/db')
const Name = require('./models/nameModel')
const cors = require('cors')

connectDB()
const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.post('/', async (req, res) => {
    //console.log(req.body)
    if (req) {
        const name = await Name.create({
            text: req.body.text
        })
        res.status(200).json(name)
        }
    res.status(400)
  })


app.listen(port, () => console.log(`CORS-enabled server started on port ${port}`))