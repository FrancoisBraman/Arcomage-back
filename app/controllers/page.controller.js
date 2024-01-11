const pageController = {
  /**
   * Home page
   * @returns the list of available routes
   */
  getHomePage: (req, res) => res.sendFile('home.html', { root: './app/views' }),

  getGamesPage: (req, res) => res.sendFile('games.html', { root: './app/views' }),
};

module.exports = pageController;
