import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activities';
import RequestsReducer from './reducer_requests';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivityReducer,
  requests: RequestsReducer
});

export default rootReducer;
