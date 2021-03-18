const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router/router');


const PORT = process.env.PORT || 8000

const app = express();
const server = http.createServer(app, )
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', '*')
        return res.status(200).json({})
    }
    next()
});

app.use(router);

io.on('connection', (socket) => {
    console.log('we have connected to socket')

    socket.on('join', ({ name, room }) => {
        console.log(name, room)
    })

    socket.on('disconnect', () => {
        console.log('User has left')
    })
})

server.listen(PORT, () => console.log(`server started on ${PORT}`))