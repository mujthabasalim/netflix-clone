import { Navbar, MovieCards, Footer } from "@/components";
import "./Home.css";
import banner_image from "@/assets/hero_banner.jpg";
import banner_title from "@/assets/hero_title.png";
import play_icon from "@/assets/play_icon.png";
import info_icon from "@/assets/info_icon.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const movieTypes = [
    { title: "Top Rated", category: "top_rated" },
    { title: "Upcoming", category: "upcoming" },
    // { title: "Popular on Netflix", category: "popular" },
    { title: "Trending Now", category: "now_playing" },
  ];
  return (
    <>
      <div className="relative">
        <img
          src={banner_image}
          alt=""
          className="banner-img h-screen object-cover"
        />
        <Navbar />
        <div className="absolute bottom-0 w-full pl-16 mb-3">
          <img src={banner_title} alt="" className="max-w-120" />
          <div className="max-w-200 mt-3 text-lg">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </div>
          <div className="flex gap-3 mt-3">
            <Link
              to=""
              className="flex gap-2 p-3 bg-white text-black font-bold rounded "
            >
              <img src={play_icon} alt="" width={24} />
              Play
            </Link>
            <Link
              to=""
              className="flex gap-2 p-3 bg-gray-600 text-white font-bold rounded "
            >
              <img src={info_icon} alt="" width={24} />
              More Info
            </Link>
          </div>
          <MovieCards />
        </div>
      </div>
      <div className="pl-16">
        {movieTypes.map((movieType, index) => (
          <MovieCards
            key={index}
            title={movieType.title}
            category={movieType.category}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};
