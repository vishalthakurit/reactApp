import React, { Component } from 'react';

class Logger extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            userName : 'Vishal Thakur',
            location : 'Noida Sector 22',
            counter : 0,
            nameClass : 'user_name',
            locationCass : 'user_location',
            buttonCounter : 0
        }
        //console.log('contructor is running');
        this.updateData();
       // this.increment  = this.increment.bind(this);
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        //console.log('component will mount is running');        
    }

    componentDidMount() {
        //console.log('component did mount');        
    } 

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        // console.log('component will receive props is running');
        // console.log('nextProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('should component update is running');
        // console.log('next Props', nextProps);
        // console.log('next State', nextState);
         return true;            
    }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        // console.log('component will update is running');
        // console.log('Next-Props', nextProps);
        // console.log('Next-State', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('Component Did Update is running');
        // console.log('Old Props', prevProps);
        // console.log('Old State', prevState);
    }

    componentWillUnmount() {
        //console.log('component will unmount trigger');
    }    

    updateData(){
        //console.log('custom method (updateData) is running');
        setInterval(() => {
            this.setState ({
                userName : 'Vishal Rajput',
                location : 'Delhi',
                counter: this.state.counter + 1,
                nameClass: 'user_name_update',
                locationCass: 'user_location_update'
            })
        }, 3000)
    }

    increment(params, event){
        //console.log('params', params);
        //console.log(this);
        if(params === "positive") {
            this.setState({
                buttonCounter : this.state.buttonCounter + 1
            })
        } else {
            this.setState({
                buttonCounter: this.state.buttonCounter - 1
            })
        }
    }

    render(){
        //console.log('render is running');
        return(
            <div>
                {
                    (this.state.counter <= 3) ? ('Anshu') : (<div></div>)
                }
                <span>Name = <span className={this.state.nameClass}>{this.state.userName} </span></span>
                <span>Location =<span className={this.state.locationCass}>{this.state.location} </span></span>
                <br/>
                <div>
                    <button onClick={this.increment.bind(this, 'positive')}>+</button>
                    <span>Button Counter Value : {this.state.buttonCounter}</span>
                    <button onClick={this.increment.bind(this, 'negative')}>-</button>
                </div>
            </div>  
        );
    }
}

export default Logger;