import React, {Component} from 'react';
import Header from './list-container';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <MovieList/>
                    <MovieDetail/>
                </div>
            </div>
        );
    }
}