const app = require('express')();
const io = require('socket.io').listen(app.listen(8080));

let rooms = {};

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

    socket.on('createRoom', room => {
        if(!rooms.hasOwnProperty(room)) { // if room doesn't exists
            socket.join(room);
            rooms = io.sockets.adapter.rooms;
        }
        else socket.emit('errorCreating', 'Room already exists');
        
    });
    socket.on('disconnect', () => {
        socket.leaveAll();
    })
});

