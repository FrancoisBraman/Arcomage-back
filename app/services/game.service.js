/**
 * @typedef {Object} GameValues
 * @property {Player} firstPlayer - instance of Player
 * @property {Player} secondPlayer - instance of Player
 * @property {number} cardsDrew - variable used to generate cards id
 */

const { games } = require('./games.service');

class Game {
  queue = [];

  /**
  * constructor - creates a new game
  * @param {GameValues} gameValues - values for the game
  */
  constructor(gameValues) {
    this.playerIndex = 0;
    this.queue.push(gameValues.firstPlayer);
    this.queue.push(gameValues.secondPlayer);

    this.cardsDrew = gameValues.cardsDrew;
  }

  /**
   * Get player instance
   * @returns {Player} - player instance
   */
  getPlayer() {
    return this.queue[this.playerIndex];
  }

  /**
   * Get enemy instance
   * @returns {Player} - enemy instance
   */
  getEnemy() {
    return this.queue[this.playerIndex === 0 ? 1 : 0];
  }

  /**
   * Check victory condition and switch side
   */
  endTurn(socket) {
    // check victory condition
    const playerWin = this.getPlayer().winCheck(this.getEnemy());
    const enemyWin = this.getEnemy().winCheck(this.getPlayer());

    if (playerWin && enemyWin) {
      socket.emit('victory', 'tie');
    } if (playerWin && !enemyWin) {
      socket.emit('victory', 'player');
    } if (!playerWin && enemyWin) {
      socket.emit('victory', 'cpu');
    }

    if (playerWin || enemyWin) delete games[socket.id];

    process.emit('gamesUpdated');

    // switch side
    this.queue.push(this.queue.shift());
    this.playerIndex = this.playerIndex === 0 ? 1 : 0;
  }

  /**
   * Generate resources using generators
   */
  generateResources() {
    const player = this.getPlayer();
    const enemy = this.getEnemy();
    player.update += player.software;
    player.crypto += player.dataMiner;
    player.virus += player.hacker;
    enemy.update += enemy.software;
    enemy.crypto += enemy.dataMiner;
    enemy.virus += enemy.hacker;
  }

  /**
   * Return simplified version of the game instance for the client
   * @returns {Object} - game instance
   */
  async simplify() {
    return {
      playerIndex: this.playerIndex,
      queue: [
        this.queue[0].simplify({
          includeHand: this.playerIndex === 0,
        }),
        this.queue[1].simplify({
          includeHand: this.playerIndex === 1,
        }),
      ],
    };
  }
}

module.exports = Game;
