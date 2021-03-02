import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useEffect, useState } from 'react';
import Movies from './comps/Movies';
import axios from 'axios'
import HeadingMov from './comps/HeadingMov';
import Search from './comps/Search'



const App = () => {

    const [ movies , setMovies ] = useState([])
    const [ search, setSearch ] = useState('')
    
    const getMovies = () => axios.get(`http://www.omdbapi.com/?s=${search}&apikey=a6625f99`)

    useEffect(() => {
        getMovies().then((result) => {
            if (result.data.Search) {
                setMovies(result.data.Search)
            } else { setMovies([]) }
        })
    }, [search])

  return (
  <div className='container-fluid'>
        <div className='row d-flex align-items-center header'>
            <HeadingMov heading="Movies" ></HeadingMov>
            <Search search={search} setSearch={setSearch}></Search>
        </div>
        <div className='row'>
          <Movies movies={movies}></Movies>
        </div>
  </div>
  )
}

export default App;