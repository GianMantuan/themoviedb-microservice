const MovieSchema = require("../../schema/Movie");
const TranslationSchema = require("../../schema/Translation");
const mockMovie = require("../../tests/MockMovieData.json");

const Translation = new TranslationSchema();

const FakeTranslationRepository = {
  async save(translation_obj) {
    const Movie = new MovieSchema(mockMovie);

    if (!Translation.joiValidate(translation_obj))
      throw new Error("Invalid Translation Schema");

    Movie.translation.push(translation_obj);

    return Movie;
  },
};

module.exports = FakeTranslationRepository;
