import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activities';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivityReducer,
});

export default rootReducer;
