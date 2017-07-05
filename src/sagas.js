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

function* fetchResultBattleSaga(action) {
  try {
    const results = yield call(api.battle, action.payload);
    if (results === null) {
      throw new Error('Looks like there was error. Check that both users exist on Github');
    }
    yield put({ type: 'FETCH_RESULT_BATTLE_SUCCESS', payload: results });
  } catch (error) {
    yield put({ type: 'FETCH_RESULT_BATTLE_FAILED', payload: error });
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_POPULAR_REPOS', fetchPopularReposSaga);
  yield takeLatest('FETCH_RESULT_BATTLE', fetchResultBattleSaga);
}
