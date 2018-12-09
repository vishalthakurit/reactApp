import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom';

class Users extends Component {

  goToContactUs(){
    this.props.history.push('/contact/anshu');
  }

  render() {
    return (
      <div className="users">
            <h1>Hello user !! {this.props.name}</h1>
            <button className="contact_us" onClick={this.goToContactUs.bind(this)}>Go To Contact-Us</button>
            <p>User Profile is : {this.props.match.params.profile}</p>
            <ul>
                <li>
                    <Link to="/contact/vishal">Vishal</Link>
                </li>
                <li>
                    <Link to="/contact/anshu">Anshu</Link>
                </li>
                <li>
                    <Link to="/contact/tony">Tony</Link>
                </li>
            </ul>
      </div>
    );
  }
}

function mapStatesToProps(state){
  return({
      name : state.rootReducer.userName
  })
}

function mapDispatchToProps(dispatch){
  return({

  })
}

export default connect(mapStatesToProps, mapDispatchToProps)(Users);

