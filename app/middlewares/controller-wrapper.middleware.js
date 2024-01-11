const debug = require('debug')('app');

/**
 * Controller wrapper to manage errors
 * @param {object} controller a controller to execute inside a try… catch… block
 * @returns a controller as middleware function
 */
module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
    debug(req.url, ' responded');
  } catch (err) {
    next(err);
  }
};
