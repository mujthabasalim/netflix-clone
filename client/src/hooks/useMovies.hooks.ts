import { useCallback, useEffect } from "react";
import { useFetch } from "./useFetch.hooks";
import { getMovies, getMovieDetails } from "@/services";
import { type MovieType } from "@/types";

export const useMovies = (category: string) => {
  const { data: movies, error, loading, execute } = useFetch<MovieType[]>();

  const fetchMovies = useCallback(() => {
    execute(() => getMovies(category));
  }, [execute, category]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies: movies || [],
    error,
    loading,
    fetchMovies,
  };
};

export const useMovieDetails = (id: string) => {
  const { data: movie, error, loading, execute } = useFetch<MovieType>();

  const fetchMovieDetails = useCallback(() => {
    if (id) {
      execute(() => getMovieDetails(id));
    }
  }, [execute, id]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return {
    movie,
    error,
    loading,
    fetchMovieDetails,
  };
};
