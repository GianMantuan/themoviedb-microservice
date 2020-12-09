const axios = require("axios");
const TranslationRepository = require("../repository/TranslationRepository");

const { API_KEY } = process.env;

const TranslationService = {
  async fetchById(movie_id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/translations?api_key=${API_KEY}`
    );

    return await TranslationRepository.save(data);
  },
};

module.exports = TranslationService;
