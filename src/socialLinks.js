import React, { Component } from 'react';
import './socialLinks.css';
//import ReactDOM from 'react-dom';


class CustomLinks extends Component {
  customStyle = {
    backgroundColor : 'lightblue',
    textDecoration : 'none'
  }
  render() { 
    return ( 
      //*********** 1st Method ************
      // React.createElement('div', { className : 'socail_sites'},
      //   React.createElement('a', this.props, this.props.linktext)
      // )

      //*********** 2nd Method ************

      <div>
        <a href={this.props.link} style={this.customStyle} title={this.props.title} target={this.props.target} >{this.props.value}</a>
      </div>
    );
  }
}

// var link1 = React.createElement(CustomLinks, { href: 'https://www.facebook.com/', linktext: 'Facebook', target: '_blank', title: 'Facebook Link' });
// var link2 = React.createElement(CustomLinks, { href: 'https://www.twitter.com/', linktext: 'Twitter', target: '_blank', title: 'Twitter Link' });
// var link3 = React.createElement(CustomLinks, { href: 'https://www.linkedin.com/', linktext: 'Linkedin', target: '_blank', title: 'LinkedIn Link' });
// var container = React.createElement('div', null, [link1, link2, link3]);

// ReactDOM.render(container, document.getElementById('social_links'));

export default CustomLinks;