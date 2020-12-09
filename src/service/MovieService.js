const axios = require("axios");
const MovieRepository = require("../repository/MovieRepository");

const { API_KEY } = process.env;

const MovieService = {
  async all() {
    return await MovieRepository.all();
  },
  async fetchById(movie_id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
    );

    return await MovieRepository.save(data);
  },
};

module.exports = MovieService;
