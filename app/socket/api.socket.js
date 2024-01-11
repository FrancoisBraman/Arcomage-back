const debug = require('debug')('socket:api');

const { Server } = require('socket.io');

const socketController = require('../controllers/socket.controller');

const { games } = require('../services/games.service');

const init = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', async (socket) => {
    debug(`${socket.id} connected`);

    // init
    socket.emit('init', await socketController.init(socket));

    // play
    // using args for retrocompatibility
    socket.on('play', async (...args) => {
      const result = await socketController.play(socket, args[args.length - 1]);

      socket.emit('play confirm', result);
      if (!result.error) {
        socket.emit('round', await socketController.gameRound(socket));
      }
    });

    // discard
    // using args for retrocompatibility
    socket.on('discard', async (...args) => {
      const result = await socketController.discard(socket, args[args.length - 1]);

      socket.emit('discard confirm', result);
      if (!result.error) {
        socket.emit('round', await socketController.gameRound(socket));
      }
    });

    // replay

    socket.on('disconnect', () => {
      // delete player from game
      if (games[socket.id]) delete games[socket.id];

      process.emit('gamesUpdated');

      debug(`${socket.id} disconnected`);
    });
  });
};

module.exports = init;
