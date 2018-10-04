import React from 'react';

function DigitalClock(props){
    return(
        <div className={props.class}>{props.time}</div>
    )
}

export default DigitalClock;