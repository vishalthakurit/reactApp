import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header.css';
import CustomLinks from './socialLinks';
import Methods from './customMethods';
import Clock from './Clock';
import Logger from './Logger';
import Slideshow from './SlideShow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to My React App</h1>
                </header>
                <Slideshow />
                <div id="social_links">
                    <CustomLinks link="https://www.facebook.com/" title="Go To Facebook" value="Facebook"  target = '_blank' />
                    <CustomLinks link="https://www.youtube.com/" title="Go To You-Tube" value="YouTube"  target = '_blank' />
                    <CustomLinks link="https://www.linkedin.com/" title="Go To LinkedIn" value="LinkedIn"  target = '_blank' />
                    <CustomLinks link="https://www.twitter.com/" title="Go To Twitter" value="Twitter"  target = '_blank' />
                    <Methods />
                    <Clock />
                    <Logger />
                </div>
            </div>
        );
    }
}

//export default App;

var text1 = 'Vishal Thakur';
var text2 = 'How are You';

var first_element = React.createElement(App, null);
var second_element = React.createElement('div', { className: 'name' }, text1);
var third_element = React.createElement('p', { className: 'about_to_know', alt: 'just-to-know' }, text2);
var fourth_element = React.createElement('a', { href: 'https://www.google.com/', className: 'google-link', alt: 'Click-Me', target: '_blank' }, 'Google');
var parent_element = React.createElement('div', null, first_element, second_element, third_element, fourth_element);

class CustomComponent extends Component {
    render() {
        return (
            React.createElement('div', { className: 'first_div' }, parent_element)
        );
    }
}

export default CustomComponent;
