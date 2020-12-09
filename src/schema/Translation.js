const Joi = require("joi");
const { Schema, model } = require("mongoose");

const TranslationRepository = new Schema({
  id: {
    type: Number,
    ref: "Movie",
  },
  translations: [
    {
      iso_3166_1: String,
      iso_639_1: String,
      name: String,
      english_name: String,
      data: {
        title: String,
        overviwe: String,
        homepage: String,
      },
    },
  ],
});

TranslationRepository.methods.joiValidate = function (translation) {
  const schema = Joi.object({
    id: Joi.number().required(),
    translation: Joi.array().items(
      Joi.object().keys({
        iso_3166_1: Joi.string(),
        iso_639_1: Joi.string(),
        name: Joi.string(),
        english_name: Joi.string(),
        data: Joi.object().keys({
          title: Joi.string(),
          overviwe: Joi.string(),
          homepage: Joi.string(),
        }),
      })
    ),
  });

  return schema.validate(translation);
};

module.exports = model("Translation", TranslationRepository);
