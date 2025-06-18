// Import necessary modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Initialize app and server
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    }
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log(`New user connected: ${socket.id}`);

    // Handle chat message
    socket.on('message', (data) => {
        io.emit('message', data); // Broadcast message to all users
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(5000, () => {
    console.log('Server listening on port 5000');
});
