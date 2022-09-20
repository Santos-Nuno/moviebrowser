import Hero from "./Hero";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";

const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailURL = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-6 my-4">
      <div className="card">
        <ReactImageFallback
          src={posterURL}
          fallbackImage="https://i.postimg.cc/cLpBrmH1/Image-Not-Found.jpg"
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailURL} className="btn btn-primary">
            Show detail
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <div>
      <Hero text={title} />
      {resultsHTML && (
				<div className="container">
					<div className="row">{resultsHTML}</div>
				</div>
			)}

      {resultsHTML.length === 0 && (
				<div className="container">
					<div className="row">
						<div className="col-10 offset-1">
							<p className="text-center mt-5 fs-1">
								No results found for: <strong>{keyword}</strong>.
							</p>
							<p className="text-center fs-1">Please choose another title.</p>
						</div>
					</div>
				</div>
			)}
    </div>
  )
};

export default SearchView;
