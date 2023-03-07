import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';
import { IMovie } from './interfaces';
import { useParams } from 'react-router-dom';

export function Movie() {
  const { id } = useParams<any>();
  const [currentMovie, setCurrentMovie] = useState<IMovie>();

  useEffect(() => {

    axios.get<IMovie>(`http://178.210.131.101:8002/cache-hurtom-with-info/${id}`).then((response) => {
      const movie = response.data
      setCurrentMovie(movie)
      console.log(movie)
    })
  }, [id])

  const [movies, setMovies] = useState<IMovie[]>([])
  return (
    <div style={{ display: "flex", width: "80%", height: "", justifyContent: "center", boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)", margin: "0px auto", padding: "10px" }}>
      <img style={{ width: "300px", height: "400px", marginRight: "10px" }} src={currentMovie?.imdb?.info?.Poster} alt="" />
      <div style={{ width: "50%", height: "auto", marginRight: "10px" }}>
        <h2>{currentMovie?.imdb?.enName} /<br></br> {currentMovie?.uaName}</h2>
        <p>Genre: {currentMovie?.imdb?.year}.</p>
        <p>Year: {currentMovie?.imdb?.info?.Genre}.</p>
        <p>Country: {currentMovie?.imdb?.info?.Country}.</p>
        <p>Director: {currentMovie?.imdb?.info?.Director}.</p>
        <p>Actors: {currentMovie?.imdb?.info?.Actors}.</p>
        <p>Plot: {currentMovie?.imdb?.info?.Plot}</p>
        <p>imdb rating: {currentMovie?.imdb?.info?.imdbRating}.</p>
      </div>
    </div>
  );
}


