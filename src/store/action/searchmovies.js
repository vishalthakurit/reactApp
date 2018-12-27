import actionType from '../constant/constant';
import $ from 'jquery';

export function searchMovies(input) 
{
    var url = actionType.OMDBMOVIEAPI+input+actionType.OMDBAPIKEY;
    console.log(url);
    $.ajax({
        url: url,
        success: (response) => {
            console.log(response);
            // this.setState({
            //     content: response
            // })
        },
        error: (error) => {
            console.log(error);
        }
    });
}