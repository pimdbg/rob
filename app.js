const fs = require('fs');
const app = require('express')();
const { exit } = require('process');
const http = require('http').createServer(app); // Setup server
const io = require("socket.io")(http); // Web socket
const path = require('path');
const Robot = require('./robot.js');


const robot = new Robot();



// Read config file
const config = JSON.parse(fs.readFileSync('config.json', { encoding:'utf8', flag:'r' } ));


// App routes
app.get('/', (req, res) => { // Webcam footage for testing
    res.sendFile(path.join(__dirname + '/index.html'));
})

// SocketIO connection
io.on('connection', (socket) => {

    /** 
     * Listen for video capture data
     * 
     * @param {string} data - Passed data, expected to be Base64 encoded image file
     */
    socket.on('video-capture', (data) => {
        // Decode data
        const decoded = Buffer.from(data, 'base64').toString();

        io.emit('test', decoded); // Pass to test html
    });

    socket.on('action', (data) => { 
        switch(data) {
            case 'forwards': 
                robot.moveForward(); 
                break;
            case 'backwards': 
                robot.moveBackwards(); 
                break;
            case 'left': 
                robot.moveLeft(); 
                break;
            case 'right': 
                robot.moveRight(); 
                break;
            default: 
                throw new Error(); 
                break;
        }
    });
})

http.listen(config.http.port, () => {
    console.log(`Server running on port ${ config.http.port }`)
})