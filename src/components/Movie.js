import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      isOpened: false,
      movieDetails: {},
    }
    this.apiKey = process.env.REACT_APP_API_KEY
  }

  getMovieDetails = id => {
    // let movieDetails = {...this.state.movieDetails};
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movieDetails: data });
    });
  };

  openModal = id => {
    let isOpened = {...this.state.isOpened};
    isOpened = true;
    this.setState({ isOpened });
    this.getMovieDetails(id);
  };

  render() {
    const {id, original_title, poster_path, release_date} = this.props.movie;
    const poster = poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : 'https://cdn.stimulantonline.ca/wp/wp-content/uploads/2019/08/TIFF-logo.jpg';
    return (
      <li>
        <div className="media">
          <img src={poster} alt={original_title} className="media-object pull-left" />
          <div className="media-body">
            <h3>{original_title}</h3>
            <p className="release-date">{release_date}</p>
            {this.state.isOpened && <MovieDetails movieDetails={this.state.movieDetails} genres={this.props.genres} />}
          </div>
          {!this.state.isOpened &&<button onClick={() => this.openModal(id)}>See details</button>}
        </div>
      </li>
    );
  }
}

export default Movie;
