import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import api from './utils/api';

function* fetchPopularReposSaga(action) {
  try {
    const repos = yield call(api.fetchPopularRepos, action.payload);
    yield put({ type: 'FETCH_POPULAR_REPOS_SUCCESS', payload: repos });
  } catch (error) {
    yield put({ type: 'FETCH_POPULAR_REPOS_FAILED', payload: error });
  }
}

// To launch the above task on each FETCH_REQUESTED action:
// function* watchFetchPopularRepos() {
//   // yield takeEvery('FETCH_POPULAR_REPOS', fetchPopularReposSaga);
//   yield takeLatest('FETCH_POPULAR_REPOS', fetchPopularReposSaga);
// }

export default function* rootSaga() {
  yield takeLatest('FETCH_POPULAR_REPOS', fetchPopularReposSaga);
}
