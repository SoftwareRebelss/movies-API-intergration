
import React, { useState, useEffect } from "react";
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

//API key: 11f359a2
const API_URL = "http://www.omdbapi.com?apikey=11f359a2";


const App = () => { // componet

     const [movies, setMovies] = useState([]);
     const [searchTerm , setSearchTerm] = useState(''); // empty string (string will be taken from the user) 
     const searchMovies = async(title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
     }


    useEffect(() => {// fecthing the movies as i load the page
        searchMovies('The rock');
      } , []);

    return ( // my jsx mockup

        <div className='app'>

        <h1>Movie Zone</h1>
        <div className='search'>
        <input placeholder='Search Movies'
         value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            
       
        <img src = {SearchIcon} alt='search' onClick={()=> searchMovies(searchTerm)}></img>

        </div>
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <div className="Coded">
       Developed by : Masiko Dlamini <br></br>
        <span className="tech">-Movie API-</span>
      </div>
        </div>


    );


}
export default App;