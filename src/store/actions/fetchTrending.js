import { BASE_URL, API_KEY } from "../../config";
import axios from "axios";
import { FETCH_TRENDING } from ".";

export const fetchTrendData = (data) => {
  return {
    type: FETCH_TRENDING,
    data,
  };
};

export const fetchTrending = () => {
  const request = axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data /*response.headers["cache-control"]*/)
    .catch((error) => {
      console.log(error);
    });
  return {
    type: FETCH_TRENDING,
    payload: request,
  };
  //return fetchTrendData(response);
};
