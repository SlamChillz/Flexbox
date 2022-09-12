const http = require('http');
const {callback} = require('./middleware');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer(callback);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}/`);
});