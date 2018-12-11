import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeState} from './store/action/action';

class About extends Component {
    
    constructor(props){
        super(props)
        this.state= {
            lastName : ''
        }
    }

    getUserInput(ev){
        this.setState({
            lastName : ev.target.value
        })
    }
  
    backToHome(){
        this.props.history.push('/');
    }

    updateState(){
        //changeState();        //not right way to call/dispatch the action
        var last_name = this.state.lastName;
        this.props.changeStateToReducer(last_name);
    }

  render() {

    return (
        <div className="About-us">
            <h1>Hello About Us page!! {this.props.name}</h1>
            <button className="about_us" onClick={this.backToHome.bind(this)}>Back To Home</button>
            <input type="text" value={this.state.lastName} onChange={this.getUserInput.bind(this)} />
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
        changeStateToReducer: (last_name) => {
            dispatch(changeState(last_name));
        }
    })
}

export default connect(mapStatesToProps, mapDispatchToProps)(About);
