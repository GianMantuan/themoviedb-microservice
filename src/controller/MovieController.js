const MovieService = require("../service/MovieService");
const TranslationService = require("../service/TranslationService");

const MovieController = {
  async all(req, res) {
    try {
      res.send(await MovieService.all());
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async fetchMovieById(req, res) {
    const { movie_id } = req.params;

    try {
      res.send(await MovieService.fetchById(movie_id));
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async fetchMovieTranlationsById(req, res) {
    const { movie_id } = req.params;

    try {
      res.send(await TranslationService.fetchById(movie_id));
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

module.exports = MovieController;
