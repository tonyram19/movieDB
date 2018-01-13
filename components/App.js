import React, { Component } from 'react';

import SearchBox from './SearchBox';
import MovieCard from './MovieCard';
import MovieInfo from './MovieInfo';
import Footer from './Footer';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      infoHidden : true,
      currentMovieID: 0
    };

  }

  assignMovieResults = (results) => {
    this.setState({
      searchResults: results.data.results
    });

    console.log(this.state.searchResults);
  }

  showMovieInfo = () => {
    this.setState({
      infoHidden: false
    });
  }

  hideMovieInfo = () => {
    this.setState({
      infoHidden: true
    });
  }

  setCurrentMovieID = (id) => {
    this.setState({
      currentMovieID: id
    });

  }

  render = () => {

    let movies = this.state.searchResults.map(
      (movie, index) => {
      return (<MovieCard 
                key={index} 
                movie={movie} 
                className="movieInfo" 
                showMovieInfo={this.showMovieInfo}
                setCurrentMovieID={this.setCurrentMovieID.bind(this)}
              />);
      }
    );

    return (
      <div id="mainContainer">
        <SearchBox assignMovieResults={this.assignMovieResults.bind(this)} />
        {movies}
        <MovieInfo 
          hidden={this.state.infoHidden}
          hideMovieInfo={this.hideMovieInfo.bind(this)}
          movieID={this.state.currentMovieID}
        />
        <Footer />
      </div>
    );
  }
}