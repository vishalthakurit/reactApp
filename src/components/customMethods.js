import React, { Component } from 'react';

class Methods extends Component
{
    myFacebookId(){
        return "https://www.facebook.com/";
    }

    facebookUserName(){
        return "Vishal Thakur";
    }

    render(){
        return(
            <div>
                <p>My Facebook ID is : <a href={this.myFacebookId()}>{this.facebookUserName()}</a></p>
            </div>
        )
    }
}

export default Methods;