require('dotenv').config();
const express = require("express");

const app = express();
const http = require('http').createServer(app); // Setup server

// React application, as default route for any unknown /*
app.use(
    express.static(path.join(__dirname, "../rob/react-app/build"))
);

// FIXME: hoe veilig is dit???
const io = require("socket.io")(http, {
    cors: {
      origin: '*',
    }
  }); // Web socket
const path = require('path');

// App routes
app.get("/api", (req, res) => {
    res.json({ message: 'not implemented' });
});

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
})

http.listen(process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`)
})
