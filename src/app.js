const express = require('express')
const mongoose = require('mongoose')
const { json } = require('body-parser')
const cors = require('cors')
const path = require('path');

const temperatures = require('./routes/temperature')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/temperature', temperatures)
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"))
})

server.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));

async function main() {
    await mongoose.connect('mongodb+srv://camila:santos_098@cluster0.rc7nj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    server.listen(port, (req, res) => {
        console.log(`Server rodando na porta ${port}`);
    })
}

main().catch(err => console.log(err));