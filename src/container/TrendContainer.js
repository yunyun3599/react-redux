import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "../store/actions/fetchTrending";

const TrendContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrending(dispatch);
  }, []);

  const TrendData = useSelector((state) => state.trending.movies) || {
    results: [],
  };

  return (
    <div>
      <h1>Trending</h1>
      {TrendData.results &&
        TrendData.results.map((movie) => (
          <img
            style={{ width: "60%" }}
            alt="movie poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            key={movie.id}
          />
        ))}
    </div>
  );
};

export default TrendContainer;
