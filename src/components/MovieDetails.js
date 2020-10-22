import React, { Component } from 'react';

class MovieDetails extends Component {
render() {
    const {runtime, tagline, overview, genres} = this.props.movieDetails;
    return (
      <section className="movie-details">
        {genres && <p className="genre">{genres.map(genre => <span className="label label-info">{genre.name}</span>)}</p>}
        {runtime > 0 && <p>Runtime: {runtime}mn</p>}
        {tagline && <p>{tagline}</p>}
        {overview && <p>{overview}</p>}
      </section>
    );
  }
}

export default MovieDetails;
