import { BASE_URL, API_KEY } from "../../config";
import axios from "axios";
import { FETCH_TRENDING } from ".";

export const fetchTrendData = (data) => {
  return {
    type: FETCH_TRENDING,
    data,
  };
};

export const fetchTrending = async () => {
  const response = await axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return fetchTrendData(response);
};
