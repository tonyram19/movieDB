import React, { Component } from 'react';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        let imgSrc = 'https://image.tmdb.org/t/p/w92' + this.props.movie.poster_path;
        
        return (
            <div className="movieInfo">
                <img className="moviePoster" src={imgSrc} />
                <h1 className="movieTitle">{this.props.movie.title}</h1>
                <h2>{this.props.movie.release_date.slice(0, 4)}</h2>
            </div>
        );
    }
}    