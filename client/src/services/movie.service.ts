import { api } from "./api";
import { type MovieType } from "@/types";

interface MovieResponse {
  results: MovieType[];
}

export const getMovies = async (category = "now_playing") => {
  const response = await api.get<MovieResponse>(`${category}`, {
    params: {
      language: "en-US",
      page: 1,
    },
  });

  return response.data.results;
};

export const getMovieDetails = async (id: string) => {
  const response = await api.get<MovieResponse>(`${id}/videos`, {
    params: {
      language: "en-US",
    },
  });

  // Pull the first video (trailer) from the results array
  return response.data.results[0] as unknown as MovieType;
};
