import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BodyIndex from './components/body_content/body_index';
import NewActivity from './components/body_content/body_new_activity';
import NewRequests from './components/body_content/body_new_requests';
import AllRequests from './components/body_content/body_all_requests';
import VenueDetails from './components/body_content/venues/venue_detail';
import Venues from './components/body_content/venues/venues_container';

export default(
<Route path="/" component={App}>
  <IndexRoute component = {BodyIndex} />
  <Route path="/venue/new_activity" component={NewActivity}/>
  <Route path="/new_requests" component={NewRequests}/>
  <Route path="/requests" component={AllRequests}/>
  <Route path="/venues" component={Venues}/>
  <Route path="/venues/:venue_name" component={VenueDetails}/>
</Route>

);
