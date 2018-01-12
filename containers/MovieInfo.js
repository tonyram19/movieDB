import React, { Component } from 'react';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        let imgSrc = 'https://image.tmdb.org/t/p/w92' + this.props.movie.poster_path;
        return (
            <div>
                <img witdh="50" height="50" src={imgSrc} />
                <h1>{this.props.movie.title} ({this.props.movie.release_date.slice(0, 4)})</h1>
            </div>
        );
    }
}    