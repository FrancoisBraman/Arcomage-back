const express = require('express');

const router = express.Router();

const pageController = require('../controllers/page.controller');
const cardController = require('../controllers/card.controller');
const controllerWrapper = require('../middlewares/controller-wrapper.middleware');

router.route('/')
  /**
   * GET /
   * @summary Display all available routes
   */
  .get(controllerWrapper(pageController.getHomePage));

router.route('/games')
  /**
   * GET /games
   * @summary Display currently active games
   */
  .get(controllerWrapper(pageController.getGamesPage));

router.route('/cards')
  /**
   * GET /cards
   * @summary Get cards list
   * @return {Card[]} 200 - success response
   * @return {ApiError} 400 - Bad request response
   */
  .get(controllerWrapper(cardController.getAllCards));

router.route('/cards/:id(\\d+)')
  /**
   * GET /cards/:id
   * @summary Get one card
   * @param {number} id.path.required - The id of the card to get.
   * @return {Card} 200 - success response
   * @return {ApiError} 400 - Bad request response
   * @return {ApiError} 404 - Card not found
   */
  .get(controllerWrapper(cardController.getOneCard));

module.exports = router;
