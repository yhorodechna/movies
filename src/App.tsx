import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';
import { Main } from './components/main/Main';
import { IMovie } from './interfaces';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieList } from './MovieList';
import { Movie } from './Movie';




function App() {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/:id" children={<Movie />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
