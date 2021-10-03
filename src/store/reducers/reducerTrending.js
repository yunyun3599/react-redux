import { FETCH_TRENDING, DELETE_TRENDING } from "../actions";

export default function trendingReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        movies: action.data,
      };
    case DELETE_TRENDING:
      console.log("Hh", state.movies);
      const movies = state.movies.results;
      return {
        ...state,
        movies: {
          ...movies,
          results: movies.filter((movie) => movie.id !== action.id),
        },
      };
    default:
      return state;
  }
}
