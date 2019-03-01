const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')

server.listen(8080)

app.get('/', (req, res) => {
    res.send(200, '<button>START BAROLCHI</button>')
})
