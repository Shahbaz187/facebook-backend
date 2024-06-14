import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import { user } from './Model/userModel.js';

await mongoose.connect('mongodb+srv://shahbazansari8998:aRfKENwql8bxbGH0@portfolio.u4rpgss.mongodb.net/facebook')

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    console.log(req.body.username);
    const userData = await user.create({
        username: req.body.username,
        password: req.body.password,
    });

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})