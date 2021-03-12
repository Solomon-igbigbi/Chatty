const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router/router')

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app)
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
    console.log('we have connected to socket')
})

server.listen(PORT, () => console.log(`server started on ${PORT}`))