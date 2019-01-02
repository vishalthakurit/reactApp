import React, {Component} from 'react';
import $ from 'jquery';
import '../css/Movies.css'; 
import SearchField from './SearchBar';
// import {searchMovies} from '../store/action/searchmovies';
import actionType from '../store/constant/constant';

const posterPath = 'https://image.tmdb.org/t/p/w500/';

// const queryString = require('query-string');
// const parsed = queryString.parse(window.location.search);
// console.log('===> ', parsed);

class ShowMovies extends Component {
   render(){
       var results = this.props.movies;
       console.log('results');
       console.log(results);
       return(
            <div className='movies_list'>
                {
                    results && results.map((val, key) => {
                        if (!this.props.bySearch)
                        {       
                            console.log('yes');                  
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
                        } else {
                            console.log('nooo');
                            return (
                                <div>HEEEEEEE</div>
                            )
                        }
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
       document.title = "Movies";
       this.state = {
           content: [],
           movieSearch : false
       }
       this.getSearch = this.getSearch.bind(this);
   }

   componentDidMount = () => {
       var url = actionType.TMDBAPI + 1;
       $.ajax({
           url: url,
           success: (response) => {
               this.setState({
                    content: response,
                    movieSearch: false
               })
           },
           error: (error) => {
               console.log(error);
           }
       });
   }

   getSearch(text) {
        // searchMovies(searchText);    OR
        var url = actionType.OMDBMOVIEAPI + text + actionType.OMDBAPIKEY;
        $.ajax({
            url: url,
            success: (response) => {
                console.log('===> ', response);
                this.setState({
                    content: response,
                    movieSearch : true
                })
            },
            error: (error) => {
                console.log(error);
            }
        });
   }

   render(){
       const { results, total_results, totalResults } = this.state.content;
       var searchData = '';
       
       if (this.state.movieSearch) {
            searchData = this.state.content;
            searchData = searchData['Search'];
       } else {
            searchData = results;
       }
       return(
           <React.Fragment>
                <SearchField class="search_movies" placeholder="seach movies..." onSubmit={recieveData => this.getSearch(recieveData)} iconColor="#333" />
                <div className='movies'>
                    <p>Total Movies are <strong>{(this.state.movieSearch) ? totalResults : total_results}</strong></p>
                    <ShowMovies movies={searchData} bySearch={this.state.movieSearch} />
                </div>
           </React.Fragment>
       )
   }
}

export default Movies;