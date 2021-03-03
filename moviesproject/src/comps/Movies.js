const Movies = ({ movies, favourite, chooseFavourite }) => {
  const Favourite = favourite;

  return (
    <>
      {movies.map((movie) => (
        <div
          className="imagediv d-flex justify-content-start m-3"
          key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={ () => chooseFavourite(movie)}
            className="overlay d-flex align-items-centar justify-content-centar">
            <Favourite></Favourite>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
