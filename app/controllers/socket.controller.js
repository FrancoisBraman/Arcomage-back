const dataMapper = require('../models/index.datamapper');
const Game = require('../services/game.service');
const Player = require('../services/player.service');
const { games } = require('../services/games.service');
const Card = require('../services/card.service');

const clamp = require('../utils/clamp');

const bestCard = require('../../data/bestCard');

const { startingValues } = require('../services/variable.service');

const socketController = {
  async init(socket) {
    let cardsDrew = 0;

    // Request a set of cards fro the database to create the starting hand of each player
    const firstStartingHandCards = await dataMapper.card.drawCards(4);
    const secondStartingHandCards = await dataMapper.card.drawCards(5);

    // Add the best card to the first player
    firstStartingHandCards.unshift(bestCard);

    // "Translate" the cards from the database to the Card class
    const firstStartingHand = await firstStartingHandCards.map((card) => {
      cardsDrew += 1;
      return new Card(Card.fromDB(cardsDrew, card));
    });
    const secondStartingHand = await secondStartingHandCards.map((card) => {
      cardsDrew += 1;
      return new Card(Card.fromDB(cardsDrew, card));
    });

    // Set the game values in an object
    const gameValues = {
      firstPlayer: new Player(socket.id, startingValues, firstStartingHand),
      secondPlayer: new Player('enemy', startingValues, secondStartingHand),
      cardsDrew,
    };

    const game = new Game(gameValues);

    // Add the newly created game to games registry
    games[socket.id] = game;

    // Request the sixth card for the player's turn
    const cardRequest = await dataMapper.card.drawCards(1);
    const sixthCard = cardRequest[0];

    // Increment the cards id and add the card to the player's hand
    game.cardsDrew += 1;
    const pickedCard = game.getPlayer().addCard(new Card(Card.fromDB(game.cardsDrew, sixthCard)));

    process.emit('gamesUpdated');

    const simplifiedGame = await game.simplify();

    // Send the simplified game state to the client with the sixth card
    return {
      game: simplifiedGame,
      pickedCard,
    };
  },

  async play(socket, cardId) {
    // Get the player's game and play the choosen card
    const game = games[socket.id];
    if (!game) return { error: 'Game not found' };
    const card = await game.getPlayer().play(cardId, game.getEnemy());

    // If an error occured, return the error and the game state
    if (card.error) return { error: card.error, game: await game.simplify() };

    // Handle the end of the turn
    game.endTurn(socket);

    return { game: await game.simplify(), playedCard: card };
  },

  async discard(socket, cardId) {
    // Get the player's game and discard the choosen card
    const game = games[socket.id];
    if (!game) return { error: 'Game not found' };
    const card = await game.getPlayer().discard(cardId);

    // If an error occured, return the error and the game state
    if (card.error) return { error: card.error, game: await game.simplify() };

    // Handle the end of the turn
    game.endTurn(socket);

    return { game: await game.simplify(), discardedCard: card };
  },

  async gameRound(socket) {
    // Get the player's game and the enemy
    const game = games[socket.id];
    if (!game) return { error: 'Game not found' };
    const currentEnemy = game.getEnemy();

    // cpu turn - drawing card
    const rawCards = await dataMapper.card.drawCards(1);
    const rawCard = rawCards[0];
    game.cardsDrew += 1;
    currentEnemy.addCard(new Card(Card.fromDB(game.cardsDrew, rawCard)));

    // Get the cpu's playable cards with the current resources
    const playableCards = currentEnemy.hand.filter(
      (card) => currentEnemy[card.type] >= card.cost,
    );

    let cpuAction;

    // If the cpu has playable cards, play a random one
    if (playableCards.length > 0) {
      // Pick a random card index from the playable cards
      const randomCard = clamp(
        Math.floor(Math.random() * playableCards.length),
        0,
        playableCards.length - 1,
      );

      // Get the card from the playable cards
      const cpuRandomCard = playableCards[randomCard];

      // Set the cpu action to an object to send to the client later
      cpuAction = {
        action: 'play',
        card: cpuRandomCard,
      };

      await currentEnemy.play(
        cpuRandomCard.id,
        game.getPlayer(),
      );

      // Handle the end of the turn
      game.endTurn(socket);

    // If the cpu doesn't have playable cards, discard a random one
    } else {
      // Pick a random card index from the hand
      const randomCard = clamp(
        Math.floor(Math.random() * currentEnemy.hand.length),
        0,
        currentEnemy.hand.length - 1,
      );

      // Get the card from the hand
      const cpuRandomCard = currentEnemy.hand[randomCard];

      // Set the cpu action to an object to send to the client later
      cpuAction = {
        action: 'discard',
        card: cpuRandomCard,
      };

      await currentEnemy.discard(cpuRandomCard.id);

      // Handle the end of the turn
      game.endTurn();
    }

    // Generate the resources for the players
    game.generateResources();

    // Request a card for the player's turn
    const cardRequest2 = await dataMapper.card.drawCards(1);
    const playerDrawingCard = cardRequest2[0];

    // Increment the cards id and add the card to the player's hand
    game.cardsDrew += 1;
    const pickedCard = game.getPlayer().addCard(new Card(
      Card.fromDB(game.cardsDrew, playerDrawingCard),
    ));

    process.emit('gamesUpdated');

    // Send the simplified game state to the client with the cpu action and the player's new card
    return { game: await game.simplify(), cpuAction, pickedCard };
  },
};

module.exports = socketController;
