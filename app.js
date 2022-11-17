const fs = require('fs');
const http = require('http');
const { exit } = require('process');

// Read config file
const config = JSON.parse(fs.readFileSync('config.json', { encoding:'utf8', flag:'r' } ));


// Setup Local server
const server = http.createServer((req, res) => {

    if (req.method !== 'POST') return; // Assure method is post
    
    let body = '';

    // Set up response headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('');
    
    // Handle incoming request
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
    });
    
});

// Listen on server path
server.listen(port = config.http.port, hostname = config.http.hostname, () => {
    console.log(`Server running at http://${ hostname }:${ port }/`);
});
 

