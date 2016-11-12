import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activities';
import RequestsReducer from './reducer_requests';
import VenuesReducer from './reducer_venues';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivityReducer,
  requests: RequestsReducer,
  venues: VenuesReducer
});

export default rootReducer;
