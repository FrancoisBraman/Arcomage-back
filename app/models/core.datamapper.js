// Here we make a basic datamapper with all the CRUD methods
module.exports = class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
  }

  /**
   * Get by primary key
   * @param {number} id - primary key
   * @returns {object} a record
   */
  async findByPk(id) {
    const preparedQuery = {
      text: `SELECT * FROM "${this.tableName}" WHERE id = $1`,
      values: [id],
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) {
      return null;
    }

    return result.rows[0];
  }

  /**
   * Get all records from a table
   * @returns {object[]} a list of records
   */
  async findAll() {
    const result = await this.client.query(`SELECT * FROM "${this.tableName}"`);

    return result.rows;
  }

  /**
   * Create a record in the table
   * @param {object} inputData data to be inserted into the table
   * @returns {object} the created record
   */
  async create(inputData) {
    const fields = [];
    const placeholders = [];
    const values = [];
    let indexPlaceholder = 1;

    Object.entries(inputData).forEach(([prop, value]) => {
      fields.push(`"${prop}"`);
      placeholders.push(`$${indexPlaceholder}`);
      indexPlaceholder += 1;
      values.push(value);
    });

    const preparedQuery = {
      text: `
                INSERT INTO "${this.tableName}"
                (${fields})
                VALUES (${placeholders})
                RETURNING *
            `,
      values,
    };

    const result = await this.client.query(preparedQuery);
    const row = result.rows[0];

    return row;
  }

  /**
   * Update a record in the table
   * @param {object} param0 data to be updated in the table, including the record identifier
   * @returns {object} the updated record
   */
  async update({ id, ...inputData }) {
    const fieldsAndPlaceholders = [];
    let indexPlaceholder = 1;
    const values = [];

    Object.entries(inputData).forEach(([prop, value]) => {
      fieldsAndPlaceholders.push(`"${prop}" = $${indexPlaceholder}`);
      indexPlaceholder += 1;
      values.push(value);
    });

    values.push(id);

    const preparedQuery = {
      text: `
            UPDATE "${this.tableName}" SET
            ${fieldsAndPlaceholders},
            updated_at = now()
            WHERE id = $${indexPlaceholder}
            RETURNING *
        `,
      values,
    };

    const result = await this.client.query(preparedQuery);
    const row = result.rows[0];

    return row;
  }

  /**
   * Delete a record in the table
   * @param {number} id
   * @returns {boolean} number of deleted records
   */
  async delete(id) {
    const result = await this.client.query(`DELETE FROM "${this.tableName}" WHERE id = $1`, [id]);

    return !!result.rowCount;
  }
};
