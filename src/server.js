/** 
 * Setup local server
 */

const http = require('http');
const { exit } = require('process');

const hostname = '127.0.0.1';
const port = 3000;

exports.run = function() {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('');

  //   Handle post request
    if (req.method == 'POST') {
          let body = '';
          
          req.on('data', (data) => body += data);
          req.on('end', () => { 
              const data = JSON.parse(body) ;

              switch(data.action) {
                  case "test": 
                      console.log("Test succesful!");
                      break;
                  case "stream": 
                      console.log("Stream recieved!");
                      break;
                  default: 
                      console.log('No valid action');
                      break;
              }

              console.table(data);
          });
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}