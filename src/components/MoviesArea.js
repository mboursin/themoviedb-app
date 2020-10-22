import React, { Component } from 'react';
import Movie from './Movie';

class MoviesArea extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row-fluid">
            <ul className="movie-list">
              {this.props.movies.map((movie, i) => {
                return <Movie movie={movie} key={i} index={i} genres={this.props.genres} apiKey={this.props.apiKey} />
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default MoviesArea;
