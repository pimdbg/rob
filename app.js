const server = require('./src/server');
const fs = require('fs');
// Read config file
const config = JSON.parse(fs.readFileSync('config.json', { encoding:'utf8', flag:'r' } ));

// Init server
server.run();