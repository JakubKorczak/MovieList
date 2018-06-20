import React, { Component } from 'react';
import Header from './header';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <MovieList />
          <MovieDetail />
      </div>
    );
  }
}
