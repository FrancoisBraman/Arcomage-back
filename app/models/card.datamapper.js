const CoreDatamapper = require('./core.datamapper');

module.exports = class Card extends CoreDatamapper {
  tableName = 'card';

  async findByPkWithType(id) {
    const sqlQuery = {
      text: `
        SELECT card.id, card.name, card.desc, card.image, resource.type, card.cost, card.special, card.rarity 
        FROM "card" 
        JOIN "resource" 
        ON resource.id = card.resource_id
        WHERE card.id = $1
        `,
      values: [id],
    };

    const result = await this.client.query(sqlQuery);

    if (!result.rows[0]) {
      return null;
    }

    return result.rows[0];
  }

  async findAllWithType() {
    const result = await this.client.query(`
        SELECT card.id, card.name, card.desc, card.image, resource.type, card.cost, card.special, card.rarity 
        FROM "card" 
        JOIN "resource" 
        ON resource.id = card.resource_id
        `);

    return result.rows;
  }

  async drawCards(amount) {
    const query = {
      text: 'SELECT * FROM "card" ORDER BY RANDOM() LIMIT $1',
      values: [amount],
    };

    const result = await this.client.query(query);

    return result.rows;
  }
};
