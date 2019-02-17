import React, { Component } from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import {searchMovies} from '../store/action/searchmovies';

class SearchField extends Component
{
    constructor(props){
        super(props)
        this.state = {
            searchInputValue : ''
        }
    }

    handleSearch(ev){
        this.setState({searchInputValue : ev.target.value});
    }

    getMoviesResult(ev) {
        var searchText = this.state.searchInputValue;
        searchMovies(searchText);
    }

    render() {
        return(
            <div>
                <input type="text" className={this.props.class} placeholder={this.props.placeholder} value={this.state.searchInputValue} onChange={this.handleSearch.bind(this)} />
                <span className="search_icon">
                    <IosSearch onClick={this.getMoviesResult.bind(this)} fontSize="25px" color="#43853d" />
                </span>
            </div>
        )
    }
}

export default SearchField;