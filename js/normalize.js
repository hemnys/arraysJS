import rawMovieList from "./movies.js";

const movieList = rawMovieList.reduce((list, movie) => {
  list.set(movie.id, movie);
  return list;
}, new Map());
const all = rawMovieList.map((movie) => movie.id);
const popular = rawMovieList.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    list.push(movie.id);
  }
  return list;
}, []);
const notPopular = rawMovieList.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id);
  }
  return list;
}, []);

const filterByTitle = (title) => {
  return rawMovieList.reduce((list, movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id);
    }
    return list;
  }, []);
};

export { movieList, all, popular, notPopular, filterByTitle };
