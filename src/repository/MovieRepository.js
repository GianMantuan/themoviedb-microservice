const MovieSchema = require("../schema/Movie");

const MovieRepository = {
  async all() {
    return await MovieSchema.find();
  },
  async save(movie_obj) {
    const Movie = new MovieSchema(movie_obj);

    if (!Movie.joiValidate(movie_obj)) throw new Error("Invalid Movie Schema");

    return await Movie.save();
  },
};

module.exports = MovieRepository;
