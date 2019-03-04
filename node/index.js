const app = require('express')();
const io = require('socket.io').listen(app.listen(8080));

let rooms = {};
let roomvar = 1000;

io.on('connection', socket => {
    console.log('User connected');

    socket.on('getRooms', () => {
        socket.emit('returnRooms', rooms);
    });

    socket.on('joinRoom', room => {
        if(rooms.hasOwnProperty(room)) { // if room exists
            if(rooms[room].length < 2) { // if room already has two players
                socket.join(room);
                rooms = io.sockets.adapter.rooms;
            }
            else socket.emit('errorJoining', "Room full. Wait until game is finished.");
            
        } 
        else socket.emit('errorJoining', 'Room doesn\'t exists');
    });

    socket.on('createRoom', () => {
        if(!rooms.hasOwnProperty(roomvar)) { // if room doesn't exists
            socket.join(roomvar);
            roomvar++;
            rooms = io.sockets.adapter.rooms;
            socket.emit('roomCreated', rooms);
        }
        else socket.emit('errorCreating', 'Room already exists');
    });

    socket.on('fire', coord => {
        socket.broadcast.to(socket.rooms[1]).emit('fire', coord)
    })

    socket.on('chat message', (room, message) => {
        console.log(socket.rooms)
        socket.in(room).emit('chat message', message)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
        socket.leaveAll();
    })
});

