import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import BodyIndex from './components/body_content/body_index';
import NewVenue from './components/body_content/body_new_venue';
import NewRequests from './components/body_content/body_new_requests';
import AllRequests from './components/body_content/body_all_requests';
import VenueDetails from './components/body_content/venues/venue_detail';
import Venues from './components/body_content/venues/venues_list';
import login from './auth/login';
import auth from './actions/index';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/login',
            state: {nextPathname: '/'}
        })
    }
}

export default(
  <Route path="/" component={App}>
    <Route path="/login" component={login}/>
    <IndexRoute component = {BodyIndex}  onEnter={requireAuth}/>
    <Route path="/venue/new_venue" component={NewVenue}  onEnter={requireAuth}/>
    <Route path="/new_requests" component={NewRequests} onEnter={requireAuth}/>
    <Route path="/requests" component={AllRequests}  onEnter={requireAuth}/>
    <Route path="/venues" component={Venues}  onEnter={requireAuth}/>
    <Route path="/venues/:id" component={VenueDetails}  onEnter={requireAuth}/>
</Route>

);
