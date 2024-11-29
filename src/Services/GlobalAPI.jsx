import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "7149baedfc726cf63a4a16d67ebb77f4";
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie";

// Corrected URL with equals sign after "api_key="
const getTrendingVideos = () =>
  axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);
const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}?api_key=${apiKey}&with_genres=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
