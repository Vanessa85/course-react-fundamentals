import { combineReducers } from 'redux';
import popular from './popular';
import battle from './battle';
import results from './battle_results';

export default combineReducers({
  popular,
  battle,
  results
});
