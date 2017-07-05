import { combineReducers } from 'redux';
import popular from './popular';
import battle from './battle';

export default combineReducers({
  popular,
  battle
});
