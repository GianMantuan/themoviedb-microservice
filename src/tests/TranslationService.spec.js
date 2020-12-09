const FakeTranslationRepository = require("../repository/fakes/FakeTranslationRepository");
const mockResponse = require("./MockTranslationData.json");

describe("Translation Test", () => {
  test("Update movie with a translation array", async () => {
    const { translation } = await FakeTranslationRepository.save(mockResponse);

    expect(translation.length).toBeGreaterThan(0);
  });
});
