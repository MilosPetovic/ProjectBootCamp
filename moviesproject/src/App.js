import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useEffect, useState } from "react";
import Movies from "./comps/Movies";
import axios from "axios";
import HeadingMov from "./comps/HeadingMov";
import Search from "./comps/Search";
import AddFavourite from "./comps/AddFavourite";
import RemoveFavourite from "./comps/RemoveFavourites";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [ user , setUser] = useState(null)

  const getMovies = () =>
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=a6625f99`);

  useEffect(() => {
    getMovies().then((result) => {
      if (result.data.Search) {
        setMovies(result.data.Search);
      } else {
        setMovies([]);
      }
    });
  }, [search]);

  const ChooseFavouritesMovie = (movie) => {
    const newFavourite = [...favourites, movie];
    setFavourites(newFavourite);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavourite = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavourite);
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </nav>
      <Switch>
        <Route path="/register"></Route>
        <Route path="/login"></Route>
        <Route path="/movies">
          <div className="container-fluid">
            <div className="row d-flex align-items-center header">
              <HeadingMov heading="Movies"></HeadingMov>
              <Search search={search} setSearch={setSearch}></Search>
            </div>
            <div className="row">
              <Movies
                movies={movies}
                chooseFavourite={ChooseFavouritesMovie}
                favourite={AddFavourite}
              ></Movies>
            </div>
            <div className="row d-flex align-items-center header-fav">
              <HeadingMov heading="Favourites"></HeadingMov>
            </div>
            <div className="row">
              <Movies
                movies={favourites}
                chooseFavourite={RemoveFavouriteMovie}
                favourite={RemoveFavourite}
              ></Movies>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
