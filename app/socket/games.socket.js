const debug = require('debug')('socket:games');

const { Server } = require('socket.io');

const { games } = require('../services/games.service');

// let updateGames;

const init = (httpServer) => {
  const io = new Server(httpServer, {
    path: '/games',
  });

  io.on('connection', async (socket) => {
    debug(`${socket.id} connected`);

    // send games data to client
    socket.emit('connection', games.toPublic());

    socket.on('disconnect', () => {
      debug(`${socket.id} disconnected`);
    });
  });

  process.on('gamesUpdated', () => {
    io.emit('update', games.toPublic());
  });
};

module.exports = { ioGames: init };
