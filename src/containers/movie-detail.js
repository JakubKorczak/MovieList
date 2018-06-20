import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component {
    render() {
        if (!this.props.movie) {
            return <div className="col-md-6 d-flex justify-content-center align-items-center">No movie selected</div>
        }
        return(
            <div className="col-md-6 p-4">
                <h1>{this.props.movie.title}</h1>
                <div>{this.props.movie.detail}</div>
                <div>{this.props.movie.director}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetail);