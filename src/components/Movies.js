import React, {Component} from 'react';
import $ from 'jquery';
import '../css/Movies.css'; 

const posterPath = 'https://image.tmdb.org/t/p/w500/';
class FetchMovies extends Component {
   render(){
       var results = this.props.movies;
       return(
            <div className='movies_list'>
                {
                    results && results.map((val, key) => {
                        return (
                            <div key={key} className="movies_section">
                                <img className="movie_image" src={posterPath+val.poster_path} />
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

class Movies extends Component {
   constructor(props) {
       super(props)
       this.state = {
           content: []
       }
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

   render(){
       const { results } = this.state.content;
       return(
            <div className='movies'>
                <p>Total Movies are <strong>{results && results.length}</strong></p>
                <FetchMovies movies={results} />
            </div>
       )
   }
}

export default Movies;