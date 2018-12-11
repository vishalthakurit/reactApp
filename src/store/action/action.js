import actionType from '../constant/constant';

export function changeState(userinput)
{
    // Wrong approach giving error

    // return dispatch => {
    //     // console.log('Buddy !!');
    //     dispatch({type : 'CHANGESTATENOW', payload : 'Rajput Boy !!'});
    // }
    
    return {
		type: actionType.CHANGESTATENOW,
		payload: userinput
	};

}