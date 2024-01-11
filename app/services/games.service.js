const gamesPrototype = {
  toPublic() {
    return Object.keys(this);
  },
};

const games = {};

Object.setPrototypeOf(games, gamesPrototype);

module.exports = { games };
