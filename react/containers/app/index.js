import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../../client/css/articles.less';
import '../../../client/css/page.less';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Link to="/">Main page</Link> <Link to="/articles/new">New article</Link>
         <div id="hacker-news">
            {this.props.children}
        </div>
      </div>
    )
  }
};