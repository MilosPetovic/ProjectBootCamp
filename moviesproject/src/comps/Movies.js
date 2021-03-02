const Movies = ({movies}) => {
    return (
        <>
        {movies.map(movie => 
        <div className="imagediv d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie"></img>
            <div className="overlay d-flex align-items-centar justify-content-centar"></div>
        </div>)
        }
        </>
        )
}

export default Movies