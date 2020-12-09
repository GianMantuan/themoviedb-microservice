const MovieSchema = require("../schema/Movie");
const TranslationSchema = require("../schema/Translation");

const TranslationRepository = {
  async save(translation_obj) {
    const Translation = new TranslationSchema();
    const { id } = translation_obj;

    if (!Translation.joiValidate(translation_obj))
      throw new Error("Invalid Translation Schema");

    return await MovieSchema.findOneAndUpdate(
      id,
      {
        $push: {
          translation: translation_obj,
        },
      },
      { new: true, useFindAndModify: false }
    );
  },
};

module.exports = TranslationRepository;
