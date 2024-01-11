const Joi = require('joi');

const cardSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  type: Joi.string().valid('update', 'crypto', 'virus').required(),
  cost: Joi.number().integer().min(0).required(),
  rarity: Joi.string().valid('common', 'rare', 'super-rare').required(),
  image: Joi.string().base64({ paddingRequired: false }).required(),
  effect: Joi.function().required(),
  special: Joi.string().valid('none', 'playagain', 'drawDiscardPlayagain', 'undiscardable').required(),
}).required();

module.exports = { cardSchema };
