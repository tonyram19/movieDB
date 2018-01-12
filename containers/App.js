import React, { Component } from 'react';

import SearchBox from './SearchBox';
import MovieInfo from './MovieInfo';  

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      searchResults : []
    };
  }

  assignMovieResults = (results) => {    
    this.setState({
      searchResults: results.data.results
    });
    console.log(this.state.searchResults);

  }

  render = () => {

    let movies = this.state.searchResults.map(
        (movie, index) => {
            return <MovieInfo key={index} movie={movie}/>;
        }
    );

    return (
      <div>
        <SearchBox assignMovieResults={this.assignMovieResults.bind(this)}/>
        <div className="container is-fluid"> {movies} </div>
      </div>
    );
  }
}