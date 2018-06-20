import React, {Component} from 'react';
import {connect} from "react-redux";

class ListContainer extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-12 search-bar">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button type="button" className="btn btn-light"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by...</button>
                            <div className="dropdown-menu">
                                <span className="p-2">Sort by</span>
                                <div className="dropdown-divider">-</div>
                                <button className="dropdown-item" type="button">Episode</button>
                                <button className="dropdown-item" type="button">Year</button>
                            </div>
                        </div>
                        <input type="search" className="form-control" id="search" placeholder="Type to search..." />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(ListContainer);