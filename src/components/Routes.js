import React from 'react';
import {
    Router, Route, Link
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// **** 1st method Start ****

import About from './About';
import Users from './Users';
import CustomComponent from './Header';
import Contactus from './Contactus';
import browserHistory from './History';
import ProfilePhotos from './Profile';
import Movies from './Movies';

// **** 1st method End ****

// **** 2nd method Start ****

//const Index = () => <h2>Home</h2>;
//const About = () => <h2>About</h2>;
//const Users = () => <h2>Users</h2>;

// **** 2nd method End ****

// const browserHistory = createBrowserHistory();

const CustomRoutes = () => (

    <Router history={browserHistory}>
        <div>
            <nav className="navebar_menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/Excellence-Technology">About Us</Link>
                    </li>
                    <li>
                        <Link to="/users/react-developer">Users</Link>
                    </li>
                    <li>
                        <Link to="/ProfilePhotos/">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Movies/">Movies</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={CustomComponent} />
            <Route path="/about/:company" component={About} />
            <Route path="/users/:profile" component={Users} />
            <Route path="/contact/:username" component={Contactus} />
            <Route path="/ProfilePhotos/" component={ProfilePhotos} />
            <Route path="/Movies/" exact component={Movies} />
        </div>
    </Router>

)

export default CustomRoutes;