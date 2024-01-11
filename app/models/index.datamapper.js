// Conecting to client
const client = require('./pg.client');

// cf: "import/prefer-default-export": "off" dans .eslintrc.json
const Card = require('./card.datamapper');
const Resource = require('./resource.datamapper');

// Inject DB client connexion to datamappers, then export all
module.exports = {
  card: new Card(client),
  resource: new Resource(client),
};
