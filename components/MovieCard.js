import React, { Component } from 'react';

export default class MovieCard extends Component {

    constructor(props) {
        super(props);
    }

    openMovie = () => {
        this.props.setCurrentMovieID(this.props.movie.id);
        this.props.showMovieInfo();
    }

    render = () => {
        let imgSrc = 'https://image.tmdb.org/t/p/w92' + this.props.movie.poster_path;
        
        return (
            <div className="movieCard" onClick={this.openMovie}>
                <img className="movieCardPoster" src={imgSrc} />
                <h1 className="movieCardTitle">{this.props.movie.title}</h1>
                <h2 className="movieCardTitle">{this.props.movie.release_date.slice(0, 4)}</h2>
            </div>
        );
    }
}    