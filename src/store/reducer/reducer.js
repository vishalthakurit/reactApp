import actionType from '../constant/constant';

const INITIAL_STATE = {
    userName : 'Vishal Rajput Redux Work'
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {    
        case actionType.CHANGESTATENOW :
            return({
                ...states,
                userName : action.payload
            })
    
        default:
            return states;
    }
}