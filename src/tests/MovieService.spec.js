const FakeMovieRepository = require("../repository/fakes/FakeMovieRepository");
const mockResponse = require("./MockMovieData.json");

describe("Movie Test", () => {
  test("Mock movie", async () => {
    const movie = await FakeMovieRepository.save(mockResponse);

    expect(movie).toHaveProperty("_id");
  });
});
