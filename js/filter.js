import {
  all,
  movieList,
  popular as mostValued,
  notPopular as leastValued,
} from "./normalize.js";
import { renderMovieListFromMap } from "./render.js";

const $filterSelector = document.getElementById("filter");

$filterSelector.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      return renderMovieListFromMap(mostValued, movieList);
    case "least-valued":
      return renderMovieListFromMap(leastValued, movieList);
    default:
      return renderMovieListFromMap(all, movieList);
  }
});
