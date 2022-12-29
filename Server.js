const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");

//FIXME: io socket niet geïmplementeerd
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: "/api/auth",
    };
		this.io = require("socket.io")(http, {
			cors: {
				origin: '*',
			}
		}); // Web socket

    this.middlewares();
    this.routes();
  }

	middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    // Pick up React index.html file
    this.app.use(
      express.static(path.join(__dirname, "../rob/react-app/build"))
    );
	}

  // Bind controllers to routes
  routes() {
    this.app.get(this.paths.auth, (req, res) => {
        res.json({ message: 'not implemented' });
    })
    // this.app.use(this.paths.homepage, require("../routes/homepage"));
    // Catch all requests that don't match any route
    this.app.get("/index", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../rob/react-app/build/index.html")
      );
    });
	}

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports = Server;

// TODO: implement socket.io
// require('dotenv').config();
// const Server = require('./Server');
// const server = new Server();
// 
// server.listen();