import React, { useEffect, useState, useRef } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalAPI.getTrendingVideos();
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending videos:", error);
      setError("Failed to fetch trending videos");
      setLoading(false);
    }
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <button
        className="hidden md:block text-[30px] absolute left-0 mx-8 mt-[150px] cursor-pointer"
        onClick={sliderLeft}
        aria-label="Scroll Left"
      >
        <HiChevronLeft />
      </button>
      <button
        className="hidden md:block text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer"
        onClick={sliderRight}
        aria-label="Scroll Right"
      >
        <HiChevronRight />
      </button>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt={item.title}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
