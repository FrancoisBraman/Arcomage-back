const dataMapper = require('../models/index.datamapper');

const cardController = {
  /**
   * Card controller to get all records
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @returns multiple cards record
   */
  getAllCards: async (req, res) => {
    const cards = await dataMapper.card.findAllWithType();
    return res.json(cards);
  },

  /**
   * Card controller to get a record
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @returns single specific card record
   */
  getOneCard: async (req, res) => {
    const cardId = Number(req.params.id);
    const card = await dataMapper.card.findByPkWithType(cardId);
    return res.json(card);
  },
};

module.exports = cardController;
