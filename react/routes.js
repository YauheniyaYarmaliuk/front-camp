import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app/';
import Home from './components/home/';
import New from './components/articles/new';
import Edit from './components/articles/edit';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="articles">
      <IndexRoute component={Home} />
      <Route path="new" component={New} />
      <Route path=":id/edit" component={Edit}></Route>
    </Route>
  </Route>
);