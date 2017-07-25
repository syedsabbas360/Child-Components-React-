import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base">
        <Header />
      {this.props.children}
        <Footer />
      </div>
    );
  }
}
