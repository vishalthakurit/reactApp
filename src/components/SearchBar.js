import React, { Component } from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import '../css/SearchBar.css';

class SearchField extends Component
{
    constructor(props){
        super(props)
        this.state = {
            searchInputValue : ''
        }
    }

    render() {
        return(
            <div className="parent_search_box">
                <input type="text" className={`search_field ${this.props.class}`} placeholder={this.props.placeholder} value={this.state.searchInputValue} onChange={ev => this.setState({searchInputValue : ev.target.value})} />
                <span className="search_icon" onClick={() => this.props.onSubmit(this.state.searchInputValue)}>
                    <IosSearch fontSize="25px" color={this.props.iconColor} />
                </span>
            </div>
        )
    }
}

export default SearchField;