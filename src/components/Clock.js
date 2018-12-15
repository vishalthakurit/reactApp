import React, { Component } from 'react';
import DigitalClock from './Digitalclock';
import AnalogClock from './Analogclock';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date().toLocaleString(),
            counter : 0
        }
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime : new Date().toLocaleString(),
                digitalClass : 'digital_time_watch',
                analogClass : 'analog_watch_time',
                counter : this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                {/* <h2>Current Time is : {this.state.currentTime}</h2> */}
                {/* Ternarary operator for hiding digital clock after 2 seconds */}
                {
                    (this.state.counter <= 3) ? ( <DigitalClock time={this.state.currentTime} class={this.state.digitalClass} />) : (<div>Time out</div>)
                }               
                <AnalogClock time={this.state.currentTime} class={this.state.analogClass} />
            </div>
        );
    }
}

export default Clock;