import React, {Component} from 'react';
import $ from 'jquery';

class FetchMovies extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            content : []
      }
    }

    componentDidMount = () => {
        $.ajax({
            url: this.props.url,
            success: (response) => {
                //console.log(JSON.stringify(response));
                this.setState({
                    content : response
                })
            },
            error: (error) => {
                console.log(error);
            }
        });
    }    

    render(){
        return(
            <div>
                {/* {this.props.children(this.state.content)} */}
            </div>
        )
    }
    
}

class Movies extends Component
{
    render(){
        return(
            <div>
                <p>Some Latest Movies are ........</p>
                <FetchMovies url="https://demo2697834.mockable.io/movies">
                {
                    (data) => {
                        return data.map((value, key) => {
                            console.log(value.totalCount);
                            // return (
                            //     <div>
                            //         Total Movies : {value.totalCount}
                            //     </div>
                            // )       
                        });
                    }
                }
                </FetchMovies>
            </div>
        )
    }
}

export default Movies;