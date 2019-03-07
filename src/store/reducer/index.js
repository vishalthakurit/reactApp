import reducer from './reducer';
import {combineReducers} from 'redux';
import ProfileData from './reducer-users';

export default combineReducers({
    rootReducer : reducer,
    userProfileData : ProfileData
})