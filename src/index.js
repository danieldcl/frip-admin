import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
// import routes from './routes';
import promise from 'redux-promise';
import reducers from './reducers/index';
import login from './auth/login';

import App from './components/app';
import BodyIndex from './components/body_content/body_index';
import NewVenue from './components/body_content/body_new_venue';
import NewRequests from './components/body_content/body_new_requests';
import AllRequests from './components/body_content/body_all_requests';
import VenueDetails from './components/body_content/venues/venue_detail';
import Venues from './components/body_content/venues/venues_list';

import auth from './actions/index';

function requireAuth(nextState, replace) {
    // if (!auth.loggedIn()) {
        // replace({
        //     pathname:'/login',
        //     state: {nextPathname: '/'}
        // })
    // }
}

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/login" component={login}/>
      <Route path="/" component={App}>
        <IndexRoute component = {BodyIndex} onEnter={requireAuth}/>
        <Route path="/venues" component={Venues} onEnter={requireAuth}/>
        <Route path="/venue/new_venue" component={NewVenue} onEnter={requireAuth}/>
        <Route path="/new_requests" component={NewRequests} onEnter={requireAuth}/>
        <Route path="/requests" component={AllRequests} onEnter={requireAuth}/>
        <Route path="/venues/:id" component={VenueDetails} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
