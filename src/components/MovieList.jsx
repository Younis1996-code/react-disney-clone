import React, { useEffect, useState, useRef } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = async () => {
    try {
      const resp = await GlobalAPI.getMovieByGenreId(genreId);
      //   console.log(resp.data.results);
      setMovies(resp.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 500;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 500;
    }
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`hidden md:block text-[50px] p-2 absolute left-0 z-10 ${
          index_ % 3 == 0 ? "mt-[100px]" : "mt-[150px]"
        } cursor-pointer`}
        onClick={sliderLeft}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
      >
        {movies.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={item.id} movie={item} />
            ) : (
              <MovieCard key={item.id} movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        className={`hidden md:block text-[50px] p-2 absolute right-0 z-10 ${
          index_ % 3 == 0 ? "top-[100px]" : "top-[150px]"
        } cursor-pointer`}
        onClick={sliderRight}
      />
    </div>
  );
}

export default MovieList;
