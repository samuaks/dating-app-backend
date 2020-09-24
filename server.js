import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cards from './schema.js'

// App config
const app = express()
const port = process.env.PORT || 8001

const connection = 'mongodb+srv://admin:chaPha8k@cluster0.nvj0m.mongodb.net/datingdb?retryWrites=true&w=majority'

// Middleware
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


// Api endpoint
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post("/cards", (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (error, data) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/cards", (req, res) => {
    Cards.find((error, data) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))