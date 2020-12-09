const { v4: uuidv4 } = require("uuid");
const MovieSchema = require("../../schema/Movie");

const movies = [];

const FakeMovieRepository = {
  async findById(id) {
    return await MovieSchema.findById(id);
  },
  async save(movie_obj) {
    const Movie = new MovieSchema();

    if (!Movie.joiValidate(movie_obj)) throw new Error("Invalid Movie Schema");

    Object.assign(Movie, { _id: uuidv4(), ...movie_obj });

    movies.push(Movie);

    return Movie;
  },
};

module.exports = FakeMovieRepository;
