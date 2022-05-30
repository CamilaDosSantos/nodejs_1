const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const server = express()
const port = 3000;


const temperature = require('./routes/temperature')

server.use(json());
server.use(cors());
server.use('/temperature', temperature);
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', "index.html"))
})
server.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));
async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    server.listen(port, (req, res) => {
        console.log(`Server rodando na porta ${port}`);
    })
}

main().catch(err => console.log(err));