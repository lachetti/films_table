import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilmsTable from './components/FilmsTable';
import OnLoadingMoviesData from './components/OnLoadingMoviesData';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const DataLoading = OnLoadingMoviesData(FilmsTable);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://yts.mx/api/v2/list_movies.json?limit=10&page=' + page;
    console.log('page=' + page);
    axios.get(apiUrl).then((resp) => {
      const filmsData = resp.data;
      console.log(filmsData.data);
      setMovies(filmsData.data.movies);
      setPage(filmsData.data.page_number);
      setMovieCount(filmsData.data.movie_count);
      setLoading(false);
    });
  }, [setLoading]);

  const goToPage = (page_number) => {
    setLoading(true);
    const apiUrl = 'https://yts.mx/api/v2/list_movies.json?limit=10&page=' + page_number;
    axios.get(apiUrl).then((resp) => {
      const filmsData = resp.data;
      console.log(filmsData.data);
      setMovies(filmsData.data.movies);
      setPage(filmsData.data.page_number);
      setMovieCount(filmsData.data.movie_count);
      setLoading(false);
    });
  }

  return (
    <div className="app">
      <Pagination 
        movieCount={movieCount}
        page={page}
        goToPage={goToPage}
      />
      <DataLoading 
        isLoading={loading} 
        movies={movies} 
      />
      <Pagination 
        movieCount={movieCount}
        page={page}
        goToPage={goToPage}
      />
    </div>
  );
}

export default App;
