import React, {Component} from 'react';
import $ from 'jquery';
import '../css/Movies.css'; 
import SearchField from './SearchBar';
// import {searchMovies} from '../store/action/searchmovies';
import actionType from '../store/constant/constant';
import Pagination from "react-js-pagination";

const posterPath = 'https://image.tmdb.org/t/p/w500/';

// const queryString = require('query-string');
// const parsed = queryString.parse(window.location.search);
// console.log('===> ', parsed);

class ShowMovies extends Component {
   render(){
       var results = this.props.movies;
       return(
            // <a href="#" className="movie_hover">
                <div className='movies_list'>
                    {
                        results && results.map((val, key) => {
                            if (!this.props.bySearch)
                            {                    
                                return (
                                   // <a href="javascript:void(0)" className="movie_hover" key={key}>
                                        <div key={key} className="movies_section">                            
                                            <img className="movie_image movie_hover" src={posterPath+val.poster_path} alt="" />
                                            <div className="movie_content">
                                                <h2 className="movie_title movie_hover">{val.original_title}</h2>
                                                <p>Popularity : <strong>{val.popularity}</strong></p>
                                                <p>Release Date : <strong>{val.release_date}</strong></p>
                                                <span className="avg_vote">Average Vote : <strong>{val.vote_average}</strong></span>
                                                <span className="total_vote">Total Vote : <strong>{val.vote_count}</strong></span>
                                                <p>Language : <strong>{val.original_language}</strong></p>
                                            </div>
                                            <div className="movie_popup mv_popup_hide">
                                                <ShowMoviesPopup />
                                                <h2 className="movie_title">{val.original_title}</h2>
                                                <div className="mv_popup_img">
                                                    <img className="movie_image" src={posterPath+val.poster_path} alt="" />
                                                </div>
                                                <div className="mv_popup_content">
                                                    <div className="popupCloseButton">X</div>
                                                    <p className="movie_overview">{val.overview}</p>
                                                    <p>Popularity : <strong>{val.popularity}</strong></p>
                                                    <p>Release Date : <strong>{val.release_date}</strong></p>
                                                    <span className="avg_vote">Average Vote : <strong>{val.vote_average}</strong></span>
                                                    <span className="total_vote">Total Vote : <strong>{val.vote_count}</strong></span>
                                                    <p>Language : <strong>{val.original_language}</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                   // </a>
                                )
                            } else { 
                                return (
                                    <div key={key} className="movies_section">                            
                                        <img className="movie_image movie_hover" src={val.Poster} alt="" />
                                        <div className="movie_content">
                                            <h1 className="movie_title movie_hover">{val.Title}</h1>
                                            <p className="movie_type">Type : <strong>{val.Type}</strong></p>
                                            <p>Release Year : <strong>{val.Year}</strong></p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            // </a>
       )
   }
}

class ShowMoviesPopup extends Component 
{
    componentDidMount = () => {
        $(".movie_hover").click(function (e) {
            e.preventDefault();
            $('.black_background').show();
            $(this).parents('.movies_section').find('.movie_popup').addClass('mv_popup_show');
            $(this).parents('.movies_section').find('.movie_popup').removeClass('mv_popup_hide');
        });

        function closeMoviePopup() {
            $('.black_background').hide();
            $('.movie_popup').addClass('mv_popup_hide');
            $('.movie_popup').removeClass('mv_popup_show');
        }

        $(document).on("keydown", function (e) {
            if (e.keyCode === 27) {
                closeMoviePopup();
            }
        });

        $(".popupCloseButton").click(function(e) {
            e.preventDefault();
            closeMoviePopup();            
        });
    }

    render() {
        return (
            null
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
           movieSearch : false,
           activePage : 1
       }
       this.getSearch = this.getSearch.bind(this);
       this.handlePageChange = this.handlePageChange.bind(this);
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

   handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber})
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
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
           </React.Fragment>
       )
   }
}

export default Movies;