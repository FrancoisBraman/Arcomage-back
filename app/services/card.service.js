const { cardSchema } = require('../schemas/card.schema');

/**
 * @typedef {Object} CardValues
 * @property {number} id - id of the card
 * @property {string} name - name of the card
 * @property {string} desc - description of the card
 * @property {string} type - type of the card
 * @property {number} cost - cost of the card
 * @property {string} rarity - rarity of the card
 * @property {string} image - image of the card
 * @property {function} effect - effect of the card
 * @property {string} special - special of the card
 */

// describe card class with jsdoc
class Card {
  /**
     * constructor - creates a new card
     * @param {CardValues} cardValues - values for the card
     */
  constructor(cardValues) {
    cardSchema.validateAsync(cardValues)
      .catch((err) => {
        throw new Error(err);
      });

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(cardValues)) {
      this[key] = value;
    }
  }

  /**
   * Create a card from the database values
   * @param {number} id - id of the card
   * @param {CardValues} cardValues - values for the card
   * @returns {Card} - card with type
   */
  static fromDB(id, cardValues) {
    return {
      id,
      name: cardValues.name,
      desc: cardValues.desc,
      type: cardValues.type,
      cost: cardValues.cost,
      rarity: cardValues.rarity,
      image: cardValues.image,
      // eslint-disable-next-line no-eval
      effect: eval(`(${cardValues.effect})`),
      special: cardValues.special,
    };
  }

  /**
   * Simplify the card for the client
   * @returns {Object} - simplified card
   */
  simplify() {
    const { effect, ...simplified } = this;
    return simplified;
  }
}

module.exports = Card;
