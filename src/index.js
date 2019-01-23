import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App from './App';
// import CustomComponent from './Header';
import CustomLinks from './components/socialLinks';
import Methods from './components/customMethods';
import Clock from './components/Clock';
import Logger from './components/Logger';
import Form from "./components/Form";
import CustomRoutes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContainer from "./components/FormContainer";

//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <div className="black_background"></div>
      <CustomRoutes />
      <div id="social_links">
            <CustomLinks link="https://www.facebook.com/" title="Go To Facebook" value="Facebook"  target = '_blank' />
            <CustomLinks link="https://www.youtube.com/" title="Go To You-Tube" value="YouTube"  target = '_blank' />
            <CustomLinks link="https://www.linkedin.com/" title="Go To LinkedIn" value="LinkedIn"  target = '_blank' />
            <CustomLinks link="https://www.twitter.com/" title="Go To Twitter" value="Twitter"  target = '_blank' />
            <Methods />
            <Clock />
            <Logger />
        </div>
        <div id="form_section">
          <Form />
        </div>
        <div className="col-md-6">
            <h3> Sample Form Container </h3>
            <FormContainer />
        </div>
    </Provider>,
    document.getElementById('root')
  )
//ReactDOM.render(<CustomComponent />, document.getElementById('root'));

// ************** 1st Method Start *******************

// ReactDOM.render(
//         <div id="social_links">
//             <CustomLinks link="https://www.facebook.com/" title="Go To Facebook" value="Facebook"  target = '_blank' />
//             <CustomLinks link="https://www.youtube.com/" title="Go To You-Tube" value="YouTube"  target = '_blank' />
//             <CustomLinks link="https://www.linkedin.com/" title="Go To LinkedIn" value="LinkedIn"  target = '_blank' />
//             <CustomLinks link="https://www.twitter.com/" title="Go To Twitter" value="Twitter"  target = '_blank' />
//             <Methods />
//             <Clock />
//             <Logger />
//         </div>
//         , document.getElementById('social_links'));

// ************** 1st Method End *******************
// ************** 2nd Method Start *****************

// var link1 = React.createElement(CustomLinks, { href: 'https://www.facebook.com/', linktext: 'Facebook', target : '_blank', title : 'Facebook Link' });
// var link2 = React.createElement(CustomLinks, { href: 'https://www.twitter.com/', linktext: 'Twitter', target: '_blank', title: 'Twitter Link' });
// var link3 = React.createElement(CustomLinks, { href: 'https://www.linkedin.com/', linktext: 'Linkedin', target: '_blank', title: 'LinkedIn Link' });
// var container = React.createElement('div', null, [link1, link2, link3]);

// ReactDOM.render(container, document.getElementById('social_links'));

// ************** 2nd Method End *****************

// ReactDOM.render(<Form />, document.getElementById('form_section'));

//registerServiceWorker();
