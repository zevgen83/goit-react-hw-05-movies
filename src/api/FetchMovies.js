import axios from 'axios';

const KEY_API = 'e547d49db32dd8dd8191ece466e036a9';

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTopMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/week?api_key=${KEY_API}`);
};

export const fetchMoviesByName = nameMovie => {
  return axios.get(
    `${BASE_URL}/search/movie?query=${nameMovie}&api_key=${KEY_API}&language=en-US&page=1&include_adult=false`
  );
};

export const fetchMovieById = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}}?api_key=${KEY_API}&language=en-US`
  );
};

export const fetchMovieCast = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}}/credits?api_key=${KEY_API}&language=en-US`
  );
};

export const fetchMovieReviews = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  );
};
