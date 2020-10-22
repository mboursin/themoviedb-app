import React, { Component } from 'react';
import MoviesArea from './MoviesArea';
// import logo from '../logo.svg';
// import '../App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      genres: [],
    }
    this.apiKey = process.env.REACT_APP_API_KEY
  }

  componentDidMount() {
    // get all movies release in 2020, popularity value 10+ in release date order
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&sort_by=release_date.asc&include_adult=false&primary_release_year=2020&vote_average.gte=10`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results] });
      // console.log("this.state.movies");
      // console.log(this.state.movies);
    });

    // get all genres
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({ genres: [...data.genres] });
    });
  }

  render() {
    return (
      <header>
        <h1>Movie List</h1>
        <MoviesArea movies={this.state.movies} genres={this.state.genres} apiKey={this.apiKey} />
      </header>
    );
  }
}

export default App;
