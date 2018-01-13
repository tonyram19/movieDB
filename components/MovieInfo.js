import React, { Component } from 'react';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);

        this.url = 'https://api.themoviedb.org/3';
        this.key = '?api_key=680741ed1242043318d4ce87e825296f';
    }

    getMovieInfo = () => {
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

    render = () => {
        return (
            <div className="movieInfo" hidden={this.props.hidden}>
                <h1>Movie</h1>
            </div>
        );
    }
}    