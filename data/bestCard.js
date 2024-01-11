const bestCard = {
  id: 10000,
  name: 'G.O.A.T.H.I.E.R',
  desc: 'Break the opponent\'s knees, erasing him from existance.',
  cost: 0,
  image: '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',
  special: 'none',
  effect: 'function effect(from, to) { to.damage(10000); return this; }',
  rarity: 'super-rare',
  type: 'update',
};

module.exports = bestCard;
