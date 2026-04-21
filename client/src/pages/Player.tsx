import { Link, useParams } from "react-router-dom";
import { useMovieDetails } from "@/hooks";
import back_arrow_icon from "@/assets/back_arrow_icon.png";

export const Player = () => {
  const { id } = useParams();
  const { movie } = useMovieDetails(id!);
  console.log(movie);
  return (
    <>
      <div className="p-5 flex justify-center gap-5">
        <Link to="/" className="fixed top-5 left-5 z-10">
          <img src={back_arrow_icon} alt="" width={40} />
        </Link>
        <iframe
          title="trailer"
          allowFullScreen
          src={`https://www.youtube.com/embed/${movie?.key}`}
          className="w-[90%] h-[90%] aspect-video"
        />
      </div>
      <div className="flex justify-between w-[90%] mx-auto">
        <div className="p-5">{movie?.published_at?.slice(0, 10)}</div>
        <div className="p-5">{movie?.type}</div>
      </div>
    </>
  );
};
