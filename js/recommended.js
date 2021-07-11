import movies from "./movies.js";
import render from "./render.js";
const setRecommended = (movies) => {
  return movies.map((movie) => {
    return { ...movie, recommended: movie.vote_average > 7 };
  });
};
window.recommended.addEventListener("click", () => {
  render(setRecommended(movies));
});
