const app = require('express')();
const io = require('socket.io').listen(app.listen(8080));

let rooms = {};
let readyPlayers = {};
let roomvar = 1000;

io.on('connection', socket => {
    console.log('User connected');

    socket.on('getRooms', () => {
        socket.emit('returnRooms', rooms);
    });

    socket.on('joinRoom', room => {
        if(rooms.hasOwnProperty(room)) { // if room exists
            if(rooms[room].length < 2) { // if room doesn't have two players already
                socket.join(room);
                rooms = io.sockets.adapter.rooms;
                readyPlayers[room][socket.id] = false;
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
            readyPlayers[roomvar] = {}
            readyPlayers[roomvar][socket.id] = false;
            roomvar++;
            io.emit('returnRooms', rooms);
        }
        else socket.emit('errorCreating', 'Room already exists');
    });

    socket.on('fire', (room, coord) => {
    	socket.emit('setTurn', false);
        socket.in(room).emit('fire', coord);
		socket.in(room).emit('setTurn', true);
		io.in(room).emit('resetTimer');
		io.in(room).emit('logFire', coord);
    });

    socket.on('setTurn', room => {
    	socket.in(room).emit('setTurn', true);
    	io.in(room).emit('resetTimer');
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
        if(typeof rooms[room] === 'undefined') { // if room is empty delete it from readyPlayers object
            delete readyPlayers[room]
        }
        io.in(room).emit('roomUpdate', rooms[room]);
        io.emit('returnRooms', rooms);
    });

    socket.on('isReady', room  => { // Creo q esto no se va a usar pero dejalo ahi mientras tanto (era pa revisar si el oponente ta listo pero creo q no es necesario)
        console.log(readyPlayers[room])
    });

    socket.on('ready', (room, ready) => {
        let players = 0;
        readyPlayers[room][socket.id] = ready;
        if(Object.keys(readyPlayers[room]).every(key => { players++; return readyPlayers[room][key] }) && players === 2) {
            socket.in(room).emit('initGame');
            io.in(room).emit('gameStarted');
        }
        socket.emit('ready', ready)
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.leaveAll();
    });
});

