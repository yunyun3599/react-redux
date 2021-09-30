import { BASE_URL, API_KEY } from "../../config";
import axios from "axios";
import { FETCH_TRENDING } from ".";

export const fetchTrendData = (data) => {
  return {
    type: FETCH_TRENDING,
    data,
  };
};

export const fetchTrending = (dispatch) => {
  axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => dispatch(fetchTrendData(response.data)))
    .catch((error) => {
      console.log(error);
    });
};
