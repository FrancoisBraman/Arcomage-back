const { startingValuesSchema, handSchema } = require('../schemas/player.schema');
const { minValue, winValue } = require('./variable.service');

/**
 * @typedef {Object} StartingValues
 * @property {number} software - starting software
 * @property {number} update - starting update
 * @property {number} dataMiner - starting dataMiner
 * @property {number} crypto - starting crypto
 * @property {number} hacker - starting hacker
 * @property {number} virus - starting virus
 * @property {number} dataCenter - starting dataCenter
 * @property {number} firewall - starting firewall
 */

class Player {
  /**
     * constructor - creates a new player
     * @param {number} id - id of the player
     * @param {StartingValues} startingValues - starting values of the player
     * @param {Card[]} hand - hand of the player
     */
  constructor(id, startingValues, hand) {
    startingValuesSchema.validateAsync(startingValues)
      .catch((err) => {
        throw new Error(err);
      });

    handSchema.validateAsync(hand)
      .catch((err) => {
        throw new Error(err);
      });

    this.id = id;
    this.software = startingValues.software;
    this.update = startingValues.update;
    this.dataMiner = startingValues.dataMiner;
    this.crypto = startingValues.crypto;
    this.hacker = startingValues.hacker;
    this.virus = startingValues.virus;
    this.dataCenter = startingValues.dataCenter;
    this.firewall = startingValues.firewall;
    this.hand = hand;
  }

  /**
     * add a card to the hand
     * @param {Card} card
     */
  addCard(card) {
    this.hand.push(card);
    return card;
  }

  /**
     * play a card
     * @param {number} cardId - the id of the card to play
     * @param {Player} player - the enemy player
     */
  async play(cardId, player) {
    const cardIndex = this.hand.findIndex((card) => card.id === Number(cardId));
    const playingCard = this.hand[cardIndex];

    if (!playingCard) return { error: 'Card doesnt exist' };

    if (this[playingCard.type] < playingCard.cost) return { error: 'Not enough resources to play this card' };

    this[playingCard.type] -= playingCard.cost;

    const deletedCard = playingCard.effect(this, player);
    this.hand.splice(cardIndex, 1);
    return deletedCard;
  }

  /**
     * discard a card
     * @param {number} cardId - the id of the card to discard
     */
  discard(cardId) {
    const cardIndex = this.hand.findIndex((card) => card.id === Number(cardId));
    const discardedCard = this.hand[cardIndex];

    if (!discardedCard) return { error: 'Card doesnt exist' };

    this.hand.splice(cardIndex, 1);
    return discardedCard;
  }

  /**
   * get the last card of the hand
   * @returns {Card} - the last card of the hand
   */
  getLastCard() {
    return this.hand[this.hand.length - 1];
  }

  winCheck(opponent) {
    let isWin = false;

    isWin = this.update >= winValue.update && isWin === false ? true : isWin;
    isWin = this.crypto >= winValue.crypto && isWin === false ? true : isWin;
    isWin = this.virus >= winValue.virus && isWin === false ? true : isWin;
    isWin = opponent.dataCenter <= winValue.dataCenter && isWin === false ? true : isWin;

    return isWin;
  }

  /**
     * change the value of a type
     * @param {string} type - type to change
     * @param {number} amount - amount to change by
     */
  change(type, amount) {
    this[type] = Math.max(this[type] + amount, minValue[type]);
  }

  /**
   * set the value of a type
   * @param {string} type - type to set
   * @param {number} amount - amount to set to
   */
  set(type, amount) {
    this[type] = amount;
  }

  /**
     * damage the firewall and data center if firewall is down
     * @param {number} amount - amount of damage
     */
  damage(amount) {
    const afterFirewall = amount - this.firewall;
    this.firewall = Math.max(this.firewall - amount, minValue.firewall);
    if (afterFirewall > 0) {
      this.dataCenter = Math.max(this.dataCenter - afterFirewall, minValue.dataCenter);
    }
  }

  /**
   * Return simplified version of the player instance for the client
   * @param {Object} options - options for the simplification
   * @returns {Object} - player instance
   */
  simplify(options) {
    if (options.includeHand) {
      const {
        id, hand, firewall, ...simplified
      } = this;
      return { ...simplified, hand: hand.map((card) => card.simplify()) };
    }
    const {
      id, hand, firewall, ...simplified
    } = this;
    return simplified;
  }
}

module.exports = Player;
