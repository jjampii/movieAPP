import React, { useState, useEffect} from  'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';

import Detail from './components/Detail.js';

import { 
  BrowserRouter as Router, 
  Routes,
  Route
  
} from 'react-router-dom';



function App() {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
      const API_KEY = '725f2e4604b05d196b66f666882b48e2';
      const BASE_URL = 'https://api.themoviedb.org/3';
      const API_URL_ALLMOVIES = BASE_URL + `/discover/movie?sort_by=popularity.desc&api_key=` + API_KEY; 

      const response = await fetch(API_URL_ALLMOVIES);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
  }
  
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Router basename="/">
      
        <Routes>
          <Route  path = '/detail/:id' element={<Detail />} />
            
          
          <Route path = '/' element={<Home movies = {movies} />} />
          
          
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
