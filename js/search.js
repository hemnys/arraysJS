import { all, movieList, filterByTitle } from "./normalize.js";
import { renderMovieListFromMap } from "./render.js";
const $form = window["search-form"];

const searchMovie = (query) => {
  if (isNaN(query) || query === "") {
    return filterByTitle(query);
  }
  let movieId = all.find((movie) => movie === parseInt(query));
  return [movieId];
};
$form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const formData = new FormData(this);
  const query = formData.get("title");
  const movies = searchMovie(query);
  if ([...movies].shift() !== undefined) {
    renderMovieListFromMap(movies, movieList);
  }
  return alert("No enconramos tu película");
});
