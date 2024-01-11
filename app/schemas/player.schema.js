const Joi = require('joi');

const Card = require('../services/card.service');

const startingValuesSchema = Joi.object({
  software: Joi.number().integer().min(1).required(),
  update: Joi.number().integer().min(0).required(),
  dataMiner: Joi.number().integer().min(1).required(),
  crypto: Joi.number().integer().min(0).required(),
  hacker: Joi.number().integer().min(1).required(),
  virus: Joi.number().integer().min(0).required(),
  dataCenter: Joi.number().integer().min(1).required(),
  firewall: Joi.number().integer().min(0).required(),
}).required();

const handSchema = Joi.array().items(Joi.object().instance(Card)).required();

module.exports = { startingValuesSchema, handSchema };
