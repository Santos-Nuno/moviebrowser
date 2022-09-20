import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f6aa9d8fa3a5d900d6bf59e667de57bc&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = movieDetails.poster_path;
      const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      if (posterPath !== null) {
        return (
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropURL} />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    className="img-fluid rounded"
                    alt={movieDetails.original_title}
                  />
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        );
      }
      if (posterPath === null) {
        return (
          <>
            <Hero text={movieDetails.original_title} />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="">No image available</h3>
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  }

  return renderMovieDetails();
};

export default MovieView;
