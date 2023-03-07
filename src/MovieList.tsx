import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';
import { Main } from './components/main/Main';
import { IMovie } from './interfaces';



export function MovieList() {
  const [movies, setMovies] = useState<IMovie[]>([])
  useEffect(() => {
    axios.get<IMovie[]>('http://178.210.131.101:8002/cache-hurtom-with-info').then((response) => {
      const data = response.data.slice(0, 10)
      console.log(data)
      setMovies(data)
    })
  }, [])
  return (
    <>
      <Main movies={movies} />
    </>
  );
}


