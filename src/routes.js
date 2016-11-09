import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BodyIndex from './components/body_content/body_index';
import NewActivity from './components/body_content/body_new_activity';

export default(
<Route path="/" component={App}>
  <IndexRoute component = {BodyIndex} />
  <Route path="/new/activity" component={NewActivity}/>
</Route>

);