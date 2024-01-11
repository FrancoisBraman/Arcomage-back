require('dotenv').config();
const debug = require('debug')('server');
const http = require('http');

const app = require('./app/app');
const ioApi = require('./app/socket/api.socket');
const { ioGames } = require('./app/socket/games.socket');

const server = http.createServer(app);

const port = process.env.PORT || 5500;

// socket.io setup
ioApi(server);
ioGames(server);

server.listen(port, () => {
  debug(`Big Brother is watching u http://localhost:${port}/`);
});
