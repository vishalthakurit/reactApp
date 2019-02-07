import React, {Component} from 'react';
import $ from 'jquery';
import '../css/Movies.css'; 
import '../css/Pagination.css'; 
import SearchField from './SearchBar';
import _ from 'lodash';
// import {searchMovies} from '../store/action/searchmovies';
import actionType from '../store/constant/constant';
import Pagination from "react-js-pagination";

const posterPath = 'https://image.tmdb.org/t/p/w500/';

class ShowMovies extends Component {

    constructor(props) {
        super(props)
        this.movieHoverHandeler = this.movieHoverHandeler.bind(this);
        this.state = {
            popId: null,
            showPopUp: false,
            popUpData: {}
        }
    }

    movieHoverHandeler(id) {
        var url = actionType.OMDBMOVIEAPIBYID + id + actionType.OMDBAPIKEY;
        let This = this;
        $.ajax({
            url: url,
            success: (response) => {
                This.setState({showPopUp: true, popUpData: response})
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    render(){
        var results = this.props.movies;
        let val = null;
        if (this.state.popId != null) {
            val = _.filter(results, o => o.id === this.state.popId)[0];
        }
        return(
            <div className='movies_list'>
                {
                    results && results.map((val, key) => {
                        if (!this.props.bySearch) {
                            return (
                                <div key={key} className="movies_section" onClick={e => this.setState({popId: val.id, showPopUp: true})}>
                                    <img className="movie_image movie_hover" src={posterPath+val.poster_path} alt="" />
                                    <div className="movie_content">
                                        <h2 className="movie_title movie_hover">{val.original_title}</h2>
                                        <p>Popularity : <strong>{val.popularity}</strong></p>
                                        <p>Release Date : <strong>{val.release_date}</strong></p>
                                        <span className="avg_vote">Average Vote : <strong>{val.vote_average}</strong></span>
                                        <span className="total_vote">Total Vote : <strong>{val.vote_count}</strong></span>
                                        <p>Language : <strong>{val.original_language}</strong></p>
                                    </div>
                                </div>
                            )
                        } else { 
                            return (
                                <div key={key} onClick={e => this.movieHoverHandeler(val.imdbID)} className="movies_section" data-imdbid={val.imdbID}>                            
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
                {this.state.popId && val ? <ShowMoviesPopup
                    mvTitle={val.original_title}
                    mvImage={posterPath+val.poster_path}
                    mvOverview={val.overview}
                    mvPopularity={val.popularity}
                    mvReleaseDate={val.release_date}
                    mvAvgVote={val.vote_count}
                    mvTotalVote={val.vote_count}
                    mvlanguage={val.original_language}
                    closePopUp = {e => this.setState({popId: null, showPopUp: false, popUpData: {}})}
                /> : null }
                {this.state.showPopUp && !_.isEmpty(this.state.popUpData)
                    ? <ShowMoviesPopup 
                        mvTitle={this.state.popUpData.Title}
                        mvImage={this.state.popUpData.Poster}
                        mvOverview={this.state.popUpData.Plot}
                        mvPopularity={this.state.popUpData.imdbRating}
                        mvReleaseDate={this.state.popUpData.Released}
                        mvAvgVote={this.state.popUpData.imdbRating}
                        mvTotalVote={this.state.popUpData.imdbVotes}
                        mvlanguage={this.state.popUpData.Language}
                        closePopUp = {e => this.setState({popId: null, showPopUp: false, popUpData: {}})}
                    />
                    : null
                }
            </div>
       )
   }
}

class ShowMoviesPopup extends Component 
{
    componentDidMount = () => {

        // $(".movie_hover").click(function (e) {
        //     e.preventDefault();
        //     if($(this).parents('.movies_section').find('.mv_imdbid').length) {
        //         var imdbId = $(this).parents('.movies_section').find('.mv_imdbid').val();
        //         searchByMovieId(imdbId);
        //     } else {
        //         $('.black_background').show();
        //         $(this).parents('.movies_section').find('.movie_popup').addClass('mv_popup_show');
        //         $(this).parents('.movies_section').find('.movie_popup').removeClass('mv_popup_hide');
        //     }
        // });

        // function closeMoviePopup() {
        //     $('.black_background').hide();
        //     $('.movie_popup').addClass('mv_popup_hide');
        //     $('.movie_popup').removeClass('mv_popup_show');
        // }

        // $(document).on("keydown", function (e) {
        //     if (e.keyCode === 27) {
        //         closeMoviePopup();
        //     }
        // });

        // $(".popupCloseButton").click(function(e) {
        //     e.preventDefault();
        //     closeMoviePopup();            
        // });

        // function searchByMovieId(id) {
            // var url = actionType.OMDBMOVIEAPIBYID + id + actionType.OMDBAPIKEY;
            // $.ajax({
            //     url: url,
            //     success: (response) => {
            //         moviePopupData = response;
            //         console.log('===> ', moviePopupData);
            //     },
            //     error: (error) => {
            //         console.log(error);
            //     }
            // });
        // }
    }    

    render() {
        const { closePopUp } = this.props;
        return (
            <div className="movie_popup mv_popup_show">
                <h2 className="movie_title">{this.props.mvTitle}</h2>
                <div className="mv_popup_img">
                    <img className="movie_image" src={this.props.mvImage} alt="" />
                </div>
                <div className="mv_popup_content">
                    <div className="popupCloseButton" onClick={e => closePopUp()}>X</div>
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
       this.escFunction = this.escFunction.bind(this);
   }

   escFunction(event){
        if(event.keyCode === 27) {
            // console.log('eeeeeee');
            // this.closePopUp();
        }
    }

   componentDidMount = () => {
       this.handlePageChange(this.state.activePage);
       document.addEventListener("keydown", this.escFunction, false);
   }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    getSearch(text) {
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
        // console.log(`active page is ${pageNumber}`);
        var url = actionType.TMDBAPI + pageNumber;
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
                <SearchField class="search_movies" placeholder="Seach Movies / Series ..." onSubmit={recieveData => this.getSearch(recieveData)} iconColor="#333" />
                <div className='movies'>
                    <p>Total Movies are <strong>{(this.state.movieSearch) ? totalResults : total_results}</strong></p>
                    <ShowMovies movies={searchData} bySearch={this.state.movieSearch} />
                </div>
                <Pagination
                    hideDisabled
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