import { combineReducers } from 'redux';

const repos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_REPOS_SUCCESS':
      return action.payload;
    case 'FETCH_POPULAR_REPOS':
      return null;
    default:
      return state;
  }
}

const selectedLanguage = (state = 'All', action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_REPOS':
      return action.payload;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_REPOS':
    case 'FETCH_POPULAR_REPOS_SUCCESS':
      return null;
    case 'FETCH_POPULAR_REPOS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  repos,
  selectedLanguage,
  errorMessage
});
