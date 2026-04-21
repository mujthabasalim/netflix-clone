import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  },
});
