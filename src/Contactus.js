import React, { Component } from 'react';

class Contactus extends Component {

  render() {
    
    let users = {
      vishal : {
          age : 25,
          weight : 55
      },
        anshu : {
          age : 20,
          weight : 50
      },
        tony : {
          age : 30,
          weight : 45
      },
    }

    let requiredUser = users[this.props.match.params.username];

    return (
      <div className="contact-us-page">
        <h1>Welcome to Contact us Page !!</h1>
        <p>{this.props.match.params.username} Age is : <b>{requiredUser.age}</b> and weight is : <b>{requiredUser.weight}</b></p>
      </div>
    );
  }
}

export default Contactus;
