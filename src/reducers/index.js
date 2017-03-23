import { combineReducers } from 'redux';
import RequestsReducer from './reducer_requests';
import VenuesReducer from './reducer_venues';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  requests: RequestsReducer,
  venues: VenuesReducer
});

export default rootReducer;
