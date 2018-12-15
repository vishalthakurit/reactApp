import React from 'react';

function AnalogClock(props){

    let time = new Date(); //new Date(props.time);
    //console.log(props.time);

    let clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    }       

    let secondsHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundcolor: 'red'
    }

    let minutesHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey', 
        width: '40%',
        height: 3,
        transform : 'rotate('+((time.getMinutes()/60)*360-90).toString() + 'deg)',
        transformOrigin : '0% 0%',
        backgroundcolor : 'red'
    }

    let hoursHand = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((time.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundcolor: 'grey'
    }

    return(
        <div className={props.class} style={clockContainer}>
            <div style={secondsHand}></div>
            <div style={minutesHand}></div>
            <div style={hoursHand}></div>
        </div>   
    )
}

export default AnalogClock;