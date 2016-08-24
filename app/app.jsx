import React from 'react';
import ReactDOM from 'react-dom';
// ****** This is using DESTRUCTURING from ES6 *******
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Budget from 'Budget';
import About from 'About';
import Examples from 'Examples';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="about" component={About}/>
  		<Route path="examples" component={Examples}/>
  		<IndexRoute component={Budget}/>
  	</Route>


  </Router>,
  document.getElementById('app')
);