import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BodyIndex from './components/body_content/body_index';
import NewVenue from './components/body_content/body_new_venue';
import NewRequests from './components/body_content/body_new_requests';
import AllRequests from './components/body_content/body_all_requests';
import VenueDetails from './components/body_content/venues/venue_detail';
import Venues from './components/body_content/venues/venues_list';

export default(
<Route path="/" component={App}>
  <IndexRoute component = {BodyIndex} />
  <Route path="/venue/new_venue" component={NewVenue}/>
  <Route path="/new_requests" component={NewRequests}/>
  <Route path="/requests" component={AllRequests}/>
  <Route path="/venues" component={Venues}/>
  <Route path="/venues/:id" component={VenueDetails}/>
</Route>

);
