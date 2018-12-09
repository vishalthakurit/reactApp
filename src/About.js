import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeState} from './store/action/action';

class About extends Component {
  
    backToHome(){
        this.props.history.push('/');
    }

    updateState(){
        //changeState();        //not right way to call/dispatch the action
        this.props.changeStateToReducer();
    }

  render() {

    return (
        <div className="About-us">
            <h1>Hello About Us page!! {this.props.name}</h1>
            <button className="about_us" onClick={this.backToHome.bind(this)}>Back To Home</button>
            <button className="change_state_btn" onClick={this.updateState.bind(this)}>Change State</button>
            <p>Company Name is : {this.props.match.params.company}</p>
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
        changeStateToReducer: () => {
            dispatch(changeState());
        }
    })
}

export default connect(mapStatesToProps, mapDispatchToProps)(About);
