import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action'
import { Link } from 'react-router-dom';

class Users extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      firstName : ''
    }
  }

  getUserInput(event){
    this.setState({
      firstName : event.target.value
    })
  }

  updateUserName(){
    var userinput = this.state.firstName;
    this.props.updateReducerState(userinput);
    this.setState({
      firstName : ''
    })
  }

  goToContactUs(){
    this.props.history.push('/contact/anshu');
  }

  render() {
    return (
      <div className="users">
            <h1>Hello user !! {this.props.name}</h1>
            <button className="contact_us" onClick={this.goToContactUs.bind(this)}>Go To Contact-Us</button>
            <input type="text" value={this.state.firstName} onChange={this.getUserInput.bind(this)} />
            <button className="update_user_name" onClick={this.updateUserName.bind(this)}>Update Reducer State</button>
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
    updateReducerState: (userinput) => {
      dispatch(changeState(userinput));
    }
  })
}

export default connect(mapStatesToProps, mapDispatchToProps)(Users);

