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
var moviePopupData = [];

class ShowMovies extends Component {

   render(){
       var results = this.props.movies;
       return(
            <div className='movies_list'>
                {
                    results && results.map((val, key) => {
                        if (!this.props.bySearch)
                        {                    
                            return (
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
                                        <ShowMoviesPopup mvTitle={val.original_title} mvImage={posterPath+val.poster_path} mvOverview={val.overview} mvPopularity={val.popularity} mvReleaseDate={val.release_date} mvAvgVote={val.vote_count} mvTotalVote={val.vote_count} mvlanguage={val.original_language} />                                                
                                    </div>
                            )
                        } else { 
                            return (
                                <div key={key} className="movies_section" data-imdbid={val.imdbID}>                            
                                    <img className="movie_image movie_hover" src={val.Poster} alt="" />
                                    <div className="movie_content">
                                        <h2 className="movie_title movie_hover">{val.Title}</h2>
                                        <p className="movie_type">Type : <strong>{val.Type}</strong></p>
                                        <p>Release Year : <strong>{val.Year}</strong></p>
                                    </div>
                                    <input type="hidden" className="mv_imdbid" value={val.imdbID} ref={(input) => this.mvid = input} />
                                </div>
                            )
                        }
                    })
                }
            </div>
       )
   }
}

class ShowMoviesPopup extends Component 
{
    componentDidMount = () => {

        $(".movie_hover").click(function (e) {
            e.preventDefault();
            if($(this).parents('.movies_section').find('.mv_imdbid').length) {
                var imdbId = $(this).parents('.movies_section').find('.mv_imdbid').val();
                searchByMovieId(imdbId);
            } else {
                $('.black_background').show();
                $(this).parents('.movies_section').find('.movie_popup').addClass('mv_popup_show');
                $(this).parents('.movies_section').find('.movie_popup').removeClass('mv_popup_hide');
            }
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

        function searchByMovieId(id) {
            var url = actionType.OMDBMOVIEAPIBYID + id + actionType.OMDBAPIKEY;
            $.ajax({
                url: url,
                success: (response) => {
                    moviePopupData = response;
                    console.log('===> ', moviePopupData);
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }    

    render() {
        return (
            <div className="movie_popup mv_popup_hide">
                <h2 className="movie_title">{this.props.mvTitle}</h2>
                <div className="mv_popup_img">
                    <img className="movie_image" src={this.props.mvImage} alt="" />
                </div>
                <div className="mv_popup_content">
                    <div className="popupCloseButton">X</div>
                    <p className="movie_overview">{this.props.mvOverview}</p>
                    <p>Popularity : <strong>{this.props.mvPopularity}</strong></p>
                    <p>Release Date : <strong>{this.props.mvReleaseDate}</strong></p>
                    <span className="avg_vote">Average Vote : <strong>{this.props.mvAvgVote}</strong></span>
                    <span className="total_vote">Total Vote : <strong>{this.props.mvTotalVote}</strong></span>
                    <p>Language : <strong>{this.props.mvlanguage}</strong></p>
                </div>
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
           movieSearch : false,
           activePage : 1
       }
       this.getSearch = this.getSearch.bind(this);
       this.handlePageChange = this.handlePageChange.bind(this);
   }

   componentDidMount = () => {
       //console.log('==>>> ', this.state.activePage);
       var url = actionType.TMDBAPI + this.state.activePage;
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
        var url = actionType.OMDBMOVIEAPIBYNAME + text + actionType.OMDBAPIKEY;
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
                    totalItemsCount={(this.state.movieSearch) ? totalResults : total_results}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
           </React.Fragment>
       )
   }
}

export default Movies;