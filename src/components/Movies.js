import React, {Component} from 'react';
import $ from 'jquery';
import '../css/Movies.css'; 
import SearchField from './SearchBar';
import {searchMovies} from '../store/action/searchmovies';

const posterPath = 'https://image.tmdb.org/t/p/w500/';

// const queryString = require('query-string');
// const parsed = queryString.parse(window.location.search);
// console.log('===> ', parsed);

class FetchMovies extends Component {
   render(){
       var results = this.props.movies;
       return(
            <div className='movies_list'>
                {
                    results && results.map((val, key) => {
                        return (
                            <div key={key} className="movies_section">
                                <img className="movie_image" src={posterPath+val.poster_path} alt="" />
                                <div className="movie_content">
                                    <h1 className="movie_title">{val.original_title}</h1>
                                    <p className="movie_overview">{val.overview}</p>
                                    <p>Popularity : <strong>{val.popularity}</strong></p>
                                    <p>Release Date : <strong>{val.release_date}</strong></p>
                                    <span className="avg_vote">Average Vote : <strong>{val.vote_average}</strong></span>
                                    <span className="total_vote">Total Vote : <strong>{val.vote_count}</strong></span>
                                    <p>Language : <strong>{val.original_language}</strong></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
       )
   }

}

class Movies extends Component 
{
   constructor(props) {
       super(props)
       this.state = {
           content: []
       }
       this.getSearch = this.getSearch.bind(this);
   }

   componentDidMount = () => {
       $.ajax({
           url: 'https://api.themoviedb.org/4/list/1?api_key=088b5bb0a61e4e7fbbd0058010d970f9&page=1',
           success: (response) => {
               this.setState({
                   content: response
               })
           },
           error: (error) => {
               console.log(error);
           }
       });
   }

   getSearch(data) {
       //console.log(data, '===============');
       var searchText = data;
       searchMovies(searchText);
   }

   render(){
       const { results } = this.state.content;
       const {total_results} = this.state.content;
       return(
           <React.Fragment>
                <SearchField class="search_movies" placeholder="seach movies..." onSubmit={recieveData => this.getSearch(recieveData)} iconColor="#333" />
                <div className='movies'>
                    <p>Total Movies are <strong>{total_results}</strong></p>
                    <FetchMovies movies={results} />
                </div>
           </React.Fragment>
       )
   }
}

export default Movies;