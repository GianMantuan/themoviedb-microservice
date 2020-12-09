const Joi = require("joi");
const { Schema, model } = require("mongoose");

const MovieRepository = new Schema({
  id: Number,
  imdb_id: String,
  original_title: String,
  overview: String,
  genres: [
    {
      id: Number,
      name: String,
    },
  ],
  adult: Boolean,
  original_language: String,
  popularity: Number,
  budget: Number,
  belongs_to_collection: Object,
  backdrop_path: String,
  poster_path: String,
  production_companies: [
    {
      id: Number,
      name: String,
      logo_path: String,
      origin_country: String,
    },
  ],
  production_countries: [
    {
      iso_3166_1: String,
      name: String,
    },
  ],
  release_data: String,
  revenue: Number,
  runtime: Number,
  spoken_languages: [
    {
      iso_639_1: String,
      name: String,
    },
  ],
  status: String,
  tagline: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  translation: {
    type: Array,
    ref: "Translation",
  },
});

MovieRepository.methods.joiValidate = function (movie) {
  const schema = Joi.object({
    id: Joi.string().required(),
    imdb_id: Joi.string().min(9).max(9),
    original_title: Joi.string(),
    overview: Joi.string(),
    genres: Joi.array().items(
      Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
      })
    ),
    adult: Joi.boolean(),
    original_language: Joi.string(),
    popularity: Joi.number(),
    budget: Joi.number(),
    belongs_to_collection: Joi.object(),
    backdrop_path: Joi.string(),
    poster_path: Joi.string(),
    production_companies: Joi.array().items(
      Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        logo_path: Joi.string(),
        origin_country: Joi.string(),
      })
    ),
    production_countries: Joi.array().items(
      Joi.object().keys({
        iso_3166_1: Joi.string(),
        name: Joi.string(),
      })
    ),
    release_data: Joi.string(),
    revenue: Joi.number(),
    runtime: Joi.number(),
    spoken_languages: Joi.array().items(
      Joi.object().keys({
        iso_639_1: Joi.string(),
        name: Joi.string(),
      })
    ),
    status: Joi.string(),
    tagline: Joi.string(),
    title: Joi.string(),
    video: Joi.boolean(),
    vote_average: Joi.number(),
    vote_count: Joi.number(),
    translation: Joi.array(),
  });

  return schema.validate(movie);
};

module.exports = model("Movie", MovieRepository);
