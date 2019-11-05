import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

export default rootReducer;