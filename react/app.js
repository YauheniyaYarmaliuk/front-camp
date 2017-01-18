'use strict';
import '../client/css/page.less';
import ShowMore from '../client/js/index.js';
import React from "react";
import ReactDOM from "react-dom";

 let jsx = (<div className="container">
    <img src="https://facebook.github.io/react/img/logo.svg"/>
    <h1>Hello, word!</h1>
    <p>React</p>
</div>);
ReactDOM.render(jsx, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  const button = new ShowMore(document.getElementById('news-button'));

  button.init();
});

