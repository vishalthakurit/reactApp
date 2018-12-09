export function changeState()
{
    // Wrong approach giving error

    // return dispatch => {
    //     // console.log('Buddy !!');
    //     dispatch({type : 'CHANGESTATENOW', payload : 'Rajput Boy !!'});
    // }
    
    return {
		type: 'CHANGESTATENOW',
		payload: 'Rajput Boy !!'
	};

}