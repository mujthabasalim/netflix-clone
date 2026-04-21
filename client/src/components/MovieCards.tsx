import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "@/hooks";

interface CardsType {
  title?: string;
  category?: string;
}

export const MovieCards = ({ title, category }: CardsType) => {
  const { movies, loading, error } = useMovies(category || "now_playing");
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();

    const element = cardsRef.current;

    if (element) element.scrollLeft += event.deltaY;
  }, []);

  useEffect(() => {
    const element = cardsRef.current;

    element?.addEventListener("wheel", handleWheel);

    return () => {
      element?.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div className="mt-10">
      <div className="text-2xl font-bold">{title || "Popular on Netflix"} </div>
      {loading ? (
        <div className="mt-3 flex gap-5 overflow-hidden hide-scrollbar">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="min-w-64 h-36 bg-zinc-800 animate-pulse rounded"
            ></div>
          ))}
        </div>
      ) : error ? (
        <div className="mt-3 text-red-500">Failed to load movies: {error}</div>
      ) : (
        <div
          className="mt-3 flex gap-5 overflow-auto hide-scrollbar"
          ref={cardsRef}
        >
          {movies.map((movie) => (
            <Link
              to={`/player/${movie.id}`}
              key={movie.id}
              className="min-w-60 relative group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full transition-transform duration-300 group-hover:brightness-75"
              />
              <div className="absolute bottom-0 right-0 p-2 font-bold text-white shadow-sm drop-shadow-md">
                {movie.title || movie.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
