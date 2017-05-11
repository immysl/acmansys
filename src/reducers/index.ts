import { combineReducers } from 'redux';
import periods from './periods';
import profile from './profile';

const mainReducer = combineReducers({
  periods,
  profile
});

export default mainReducer;
