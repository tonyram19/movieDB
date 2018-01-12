import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.url = 'https://api.themoviedb.org/3';
        this.key = '?api_key=680741ed1242043318d4ce87e825296f';

    }

    searchMovie = () => {
        let query = document.getElementById('inputBox').value;

        if (query.length == 0)
            return;

        return axios.get(this.url + '/search/movie' + this.key + '&language=en-US&page=1&query=' + query)
            .then(response => {
                return this.onResponse(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    searchMovieDummy = () => {
        let query = 'star wars';

        return axios.get(this.url + '/search/movie' + this.key + '&language=en-US&page=1&query=' + query)
            .then(response => {
                return this.onResponse(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    onResponse = (response) => {
        this.props.assignMovieResults(response);
    }

    render = () => {
        return (
            <div>
                <h1 id='myTitle'>Find a movie</h1>
                <input onSubmit={this.searchMovie} id='inputBox'></input>
                <button onClick={this.searchMovie}>Search</button>
            </div>
        );
    }
}
