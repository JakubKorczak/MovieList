import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMovie} from "../actions";
import {bindActionCreators} from 'redux';

class MovieList extends Component {
    renderList() {
        return this.props.movies.map(movie => {
            return (
                <li className="list-group-item list-group-item-action d-flex"
                    onClick={() => this.props.selectMovie(movie)}
                    key={movie.title}>
                    <div className="text-uppercase font-weight-light">Episode 1</div>
                    <div className="d-flex justify-content-between flex-grow-1 pl-3">
                        <span>{movie.title}</span>
                        <span>{movie.year}</span>
                    </div>
                </li>
            )
        })
    }
    render() {
        return(
            <div className="col-md-6 p-0" style={{borderRight: '1px solid'}}>
                <ul className="list-group list-group-flush">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMovie: selectMovie}, dispatch);
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);