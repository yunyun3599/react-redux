import { FETCH_TRENDING } from "../actions";

export default function trendingReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        movies: action.data,
      };
    default:
      return state;
  }
}
