const { Router } = require("express");
const MovieController = require("../controller/MovieController");

const router = Router();

router.get("/", MovieController.all);
router.get("/:movie_id", MovieController.fetchMovieById);
router.get(
  "/:movie_id/translations",
  MovieController.fetchMovieTranlationsById
);

module.exports = router;
