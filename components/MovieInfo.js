import React, { Component } from 'react';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="movieInfo" hidden={false}>
                <h1>Movie</h1>
            </div>
        );
    }
}    