const Search = ({search, setSearch}) => {
    return ( 
    <div className="col col-sm-4">
        <input className="form-control" 
        value={search.value}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search for movie...">
        </input>
    </div>
        )

}

export default Search