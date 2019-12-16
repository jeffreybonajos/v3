import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './users';
import homeReducer from './home';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  home: homeReducer
});

export default rootReducer;