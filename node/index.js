const app = require('express')();
const io = require('socket.io').listen(app.listen(8080));

let rooms = [];
let roomvar = 1000;

io.on('connection', socket => {
    console.log('User connected');

    socket.on('getRooms', () => {
        socket.emit('returnRooms', rooms);
    });

    socket.on('joinRoom', room => {
        if(rooms.hasOwnProperty(room)) { // if room exists
            if(rooms[room].length < 2) { // if room doesn't have two players already
				io.in(room).emit('initGame');
                socket.join(room);
                rooms = io.sockets.adapter.rooms;
                io.in(room).emit('roomUpdate', rooms[room]);
                io.emit('returnRooms', rooms);
            }
            else console.log('errorJoining', "Room full. Wait until game is finished.");
            
        } 
        else console.log('errorJoining', 'Room doesn\'t exists');
    });

    socket.on('createRoom', () => {
        if(!rooms.hasOwnProperty(roomvar)) { // if room doesn't exists
            socket.emit('getRoomInfo', roomvar);
            socket.join(roomvar);
            socket.emit('roomCreated', roomvar);
            rooms = io.sockets.adapter.rooms;
            roomvar++;
            io.emit('returnRooms', rooms)
        }
        else socket.emit('errorCreating', 'Room already exists');
    });

    socket.on('fire', (room, coord) => {
        socket.in(room).emit('fire', coord)
    });

    socket.on('chat message', (room, message) => {
        socket.in(room).emit('chat message', message)
    });

    socket.on('getRoomInfo', room => {
        socket.emit('getRoomInfo', rooms[room])
    });

    socket.on('leaveRoom', room => {
        socket.leave(room);
        rooms = io.sockets.adapter.rooms;
        io.in(room).emit('roomUpdate', rooms[room]);
        io.emit('returnRooms', rooms);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.leaveAll();
    });
});

