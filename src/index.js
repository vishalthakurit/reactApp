import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import CustomComponent from './Header';
import CustomLinks from './socialLinks';
import Methods from './customMethods';
import Clock from './Clock';
import Logger from './Logger';
import Form from "./Form";
import CustomRoutes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <CustomRoutes />
    </Provider>,
    document.getElementById('root')
  )
//ReactDOM.render(<CustomComponent />, document.getElementById('root'));

// ************** 1st Method Start *******************

ReactDOM.render(
        <div>
            <CustomLinks link="https://www.facebook.com/" title="Go To Facebook" value="Facebook"  target = '_blank' />
            <CustomLinks link="https://www.youtube.com/" title="Go To You-Tube" value="YouTube"  target = '_blank' />
            <CustomLinks link="https://www.linkedin.com/" title="Go To LinkedIn" value="LinkedIn"  target = '_blank' />
            <CustomLinks link="https://www.twitter.com/" title="Go To Twitter" value="Twitter"  target = '_blank' />
            <Methods />
            <Clock />
            <Logger />
        </div>
        , document.getElementById('social_links'));

// ************** 1st Method End *******************
// ************** 2nd Method Start *****************

// var link1 = React.createElement(CustomLinks, { href: 'https://www.facebook.com/', linktext: 'Facebook', target : '_blank', title : 'Facebook Link' });
// var link2 = React.createElement(CustomLinks, { href: 'https://www.twitter.com/', linktext: 'Twitter', target: '_blank', title: 'Twitter Link' });
// var link3 = React.createElement(CustomLinks, { href: 'https://www.linkedin.com/', linktext: 'Linkedin', target: '_blank', title: 'LinkedIn Link' });
// var container = React.createElement('div', null, [link1, link2, link3]);

// ReactDOM.render(container, document.getElementById('social_links'));

// ************** 2nd Method End *****************

ReactDOM.render(<Form />, document.getElementById('form_section'));

//registerServiceWorker();
