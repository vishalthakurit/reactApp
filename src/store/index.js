import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// create an object for default data

// const defaultState = {
//     posts : "first Post",
//     comments : 'first comment'
// }

const store = createStore(
    allReducers,
    {}, //defaultState,
    enhancers
);

export default store;