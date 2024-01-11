const Joi = require('joi');

const { Player } = require('../services/player.service');

const gameValuesSchema = Joi.object({
  id: Joi.number().min(1).required(),
  firstPlayer: Joi.object().instance(Player).required(),
  secondPlayer: Joi.object().instance(Player).required(),
  cardsDrew: Joi.number().min(2).required(),
});

module.exports = gameValuesSchema;
