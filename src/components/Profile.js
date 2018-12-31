import React, { Component } from 'react';
import $ from 'jquery';
import SearchField from './SearchBar';
import '../css/profile.css';

class FetchPhotos extends Component
{
    constructor(props){
        super(props)
        this.state = {
            content : []
        }
    }

    componentDidMount = () => {
      $.ajax({
          url: this.props.url,
          success: (response) => {
            // console.log(response);
              this.setState({
                  content : response
              })
          },
          error : (err) => {
              console.log('Error', err);
          }
      });
    }    

    render(){
        return(
            <div>
                {this.props.children(this.state.content)}
            </div>
        )
    }
}

class ProfilePhotos extends Component
{
    render(){
        return(
            <react-fragment>
                <SearchField class = "search_profile" placeholder = "seach profile..." iconColor = "#333" />
                <div className="profile_section">
                    <h1>Here are the Profile Photos of Users...</h1>
                    <FetchPhotos url="https://jsonplaceholder.typicode.com/photos">
                        {
                            (data) => {
                                return data.map((value, key) => {
                                    if(key <= 20){
                                        return (
                                            <div key={key} className="profile_details">
                                                <div className={key}>
                                                    <a href={value.url} target="_blank">
                                                        <img src={value.thumbnailUrl} alt="" />
                                                    </a>
                                                </div>
                                                <div className="profile_title">{value.title}</div>
                                            </div>
                                        )
                                    }
                                });
                            }
                        }
                    </FetchPhotos>
                </div>
            </react-fragment>
        )
    }
}

export default ProfilePhotos;
