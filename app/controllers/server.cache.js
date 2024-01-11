// eslint-disable-next-line import/no-extraneous-dependencies
const NodeCache = require('node-cache');

const cache = new NodeCache();
// eslint-disable-next-line import/no-extraneous-dependencies
const debugData = require('debug')('data');
// eslint-disable-next-line import/no-extraneous-dependencies
const debugCache = require('debug')('cache');

const dataMapper = require('../models/core.datamapper');

const TTL = 84600;
const CACHE_KEY = 'dataCached';

module.exports = {
  async get(_, res) {
    let data = cache.get(CACHE_KEY);
    if (!data) {
      debugData('Récupération');
      data = await dataMapper.findAll();
      cache.set(CACHE_KEY, data, TTL);
      debugCache(`Stockage pendant ${TTL} secondes`);
    } else {
      debugCache('Récupération');
    }
    res.json({ data });
  },

  set(req, res) {
    dataMapper.update(req.params.id, req.body);
    debugData('Mise à jour effectué');
    if (req.query.delete_cache) {
      cache.del(CACHE_KEY);
      debugCache('Suppression');
    }
    res.json({ success: true });
  },
};
