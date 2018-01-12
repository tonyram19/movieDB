import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div id="footer">
                <footer>
                    Made by <a href="http://tonyram19.github.io">Tony Ramirez</a> using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database API</a> and React.
                </footer>
            </div>
        );
    }
}    